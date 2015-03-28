drop table testing;

create table testing(
	test_id varchar(250) primary key,
	types varchar(250) not null,
	key_count int(40)
);

insert into testing values("number 1","character",3);
insert into testing values("number 2","characters",7);

select test_id from testing where test_id="number 1";
delete from testing where test_id = "number 2";
select key_count from testing;
update testing set key_count = 6 where types="character";
select * from testing order by types asc;
select * from testing where key_count=6;