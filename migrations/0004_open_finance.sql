-- Open Finance Brasil connections (sandbox now, Pluggy when keys exist)

create table if not exists open_finance_settings (
  user_id text primary key,
  provider text not null default 'sandbox',
  pluggy_client_id text,
  pluggy_client_secret text,
  updated_at timestamptz not null default now()
);

create table if not exists open_finance_connections (
  id text primary key,
  user_id text not null,
  account_id text,
  provider text not null default 'sandbox',
  institution_id text not null,
  institution_name text not null,
  status text not null default 'pending',
  consent_id text,
  item_id text,
  last_sync_at timestamptz,
  last_error text,
  scopes text not null default 'ACCOUNTS,TRANSACTIONS,BALANCES',
  created_at timestamptz not null default now()
);
create index if not exists open_finance_connections_user_idx on open_finance_connections (user_id);

create table if not exists open_finance_syncs (
  id text primary key,
  connection_id text not null,
  user_id text not null,
  imported integer not null default 0,
  auto_matched integer not null default 0,
  pending integer not null default 0,
  created_at timestamptz not null default now()
);
create index if not exists open_finance_syncs_conn_idx on open_finance_syncs (connection_id, created_at);
