-- bpoHUB Finance OS core schema (per-user, amounts in cents)

create table if not exists profiles (
  user_id text primary key,
  company_name text not null default 'Minha empresa',
  trade_name text not null default 'bpoHUB',
  seeded_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists bank_accounts (
  id text primary key,
  user_id text not null,
  name text not null,
  bank text not null,
  kind text not null default 'checking',
  color text not null default 'sky',
  initial_balance_cents integer not null default 0,
  archived boolean not null default false,
  created_at timestamptz not null default now()
);
create index if not exists bank_accounts_user_idx on bank_accounts (user_id);

create table if not exists categories (
  id text primary key,
  user_id text not null,
  name text not null,
  kind text not null,
  dre_group text not null default 'operacional',
  color text not null default 'sky',
  created_at timestamptz not null default now()
);
create index if not exists categories_user_idx on categories (user_id);

create table if not exists parties (
  id text primary key,
  user_id text not null,
  name text not null,
  kind text not null default 'customer',
  document text,
  email text,
  phone text,
  created_at timestamptz not null default now()
);
create index if not exists parties_user_idx on parties (user_id);

create table if not exists recurrences (
  id text primary key,
  user_id text not null,
  account_id text,
  category_id text,
  party_id text,
  kind text not null,
  amount_cents integer not null,
  description text not null,
  frequency text not null default 'monthly',
  day_of_month integer not null default 5,
  start_on date not null,
  end_on date,
  active boolean not null default true,
  created_at timestamptz not null default now()
);
create index if not exists recurrences_user_idx on recurrences (user_id);

create table if not exists installment_plans (
  id text primary key,
  user_id text not null,
  account_id text,
  category_id text,
  party_id text,
  kind text not null default 'expense',
  description text not null,
  total_cents integer not null,
  count integer not null,
  start_on date not null,
  active boolean not null default true,
  created_at timestamptz not null default now()
);
create index if not exists installment_plans_user_idx on installment_plans (user_id);

create table if not exists installments (
  id text primary key,
  plan_id text not null,
  user_id text not null,
  number integer not null,
  amount_cents integer not null,
  due_on date not null,
  paid_on date,
  transaction_id text,
  status text not null default 'open'
);
create index if not exists installments_user_idx on installments (user_id, due_on);

create table if not exists bills (
  id text primary key,
  user_id text not null,
  kind text not null,
  account_id text,
  category_id text,
  party_id text,
  description text not null,
  amount_cents integer not null,
  due_on date not null,
  paid_on date,
  status text not null default 'open',
  transaction_id text,
  recurrence_id text,
  installment_id text,
  created_at timestamptz not null default now()
);
create index if not exists bills_user_due_idx on bills (user_id, due_on);

create table if not exists transactions (
  id text primary key,
  user_id text not null,
  account_id text not null,
  category_id text,
  party_id text,
  kind text not null,
  amount_cents integer not null,
  description text not null,
  notes text,
  occurred_on date not null,
  status text not null default 'cleared',
  source text not null default 'manual',
  ofx_fitid text,
  recurrence_id text,
  installment_id text,
  bill_id text,
  created_at timestamptz not null default now()
);
create index if not exists tx_user_date_idx on transactions (user_id, occurred_on desc);
create index if not exists tx_user_fitid_idx on transactions (user_id, ofx_fitid);

create table if not exists auto_rules (
  id text primary key,
  user_id text not null,
  pattern text not null,
  category_id text,
  party_id text,
  active boolean not null default true,
  created_at timestamptz not null default now()
);
create index if not exists auto_rules_user_idx on auto_rules (user_id);

create table if not exists ofx_imports (
  id text primary key,
  user_id text not null,
  account_id text not null,
  filename text not null,
  imported_at timestamptz not null default now(),
  line_count integer not null default 0
);

create table if not exists ofx_lines (
  id text primary key,
  import_id text not null,
  user_id text not null,
  fitid text,
  occurred_on date not null,
  amount_cents integer not null,
  description text not null,
  match_status text not null default 'pending',
  matched_transaction_id text,
  matched_bill_id text
);
create index if not exists ofx_lines_user_idx on ofx_lines (user_id, import_id);

create table if not exists chat_messages (
  id text primary key,
  user_id text not null,
  role text not null,
  content text not null,
  payload text,
  created_at timestamptz not null default now()
);
create index if not exists chat_messages_user_idx on chat_messages (user_id, created_at);

create table if not exists dashboard_prefs (
  user_id text primary key,
  hidden_widgets text not null default '[]',
  period text not null default '30d'
);
