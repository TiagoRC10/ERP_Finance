alter table ofx_lines add column if not exists skip_rule boolean not null default false;
alter table ofx_lines add column if not exists locked boolean not null default false;
