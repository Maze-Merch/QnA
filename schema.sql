-- Database: maze

-- DROP DATABASE maze;

CREATE DATABASE maze
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

-- Table: public.product

-- DROP TABLE public.product;

USE DATABASE maze

CREATE TABLE public.product
(
    id integer NOT NULL,
    CONSTRAINT product_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.product
    OWNER to postgres;

-- Table: public.questions

-- DROP TABLE public.questions;

CREATE TABLE public.questions
(
    q_id integer NOT NULL,
    q_body text COLLATE pg_catalog."default",
    q_date text COLLATE pg_catalog."default",
    asker_name text COLLATE pg_catalog."default",
    q_helpful text COLLATE pg_catalog."default",
    product_id integer,
    CONSTRAINT questions_pkey PRIMARY KEY (q_id),
    CONSTRAINT product_connect_question FOREIGN KEY (product_id)
        REFERENCES public.product (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

-- Index: quest index

-- DROP INDEX public."quest index";

CREATE INDEX "quest index"
    ON public.questions USING brin
    (q_id)
    TABLESPACE pg_default;

COMMENT ON INDEX public."quest index"
    IS 'indexes question';

TABLESPACE pg_default;

ALTER TABLE public.questions
    OWNER to postgres;
-- Index: fki_refrence_to_product_id

-- DROP INDEX public.fki_refrence_to_product_id;

CREATE INDEX fki_refrence_to_product_id
    ON public.questions USING btree
    (product_id ASC NULLS LAST)
    TABLESPACE pg_default;


-- Table: public.answers

-- DROP TABLE public.answers;

-- Table: public.answers

-- DROP TABLE public.answers;

CREATE TABLE public.answers
(
    a_id integer NOT NULL,
    a_body text COLLATE pg_catalog."default",
    a_date text COLLATE pg_catalog."default",
    answerer_name text COLLATE pg_catalog."default",
    a_helpful integer,
    a_reported integer,
    photo_id integer,
    question_id integer,
    CONSTRAINT answers_pkey PRIMARY KEY (a_id),
    CONSTRAINT answer_connect_photo FOREIGN KEY (photo_id)
        REFERENCES public.photos (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT answer_connect_question FOREIGN KEY (question_id)
        REFERENCES public.answers (a_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

-- Index: answerIndex

-- DROP INDEX public."answerIndex";

CREATE INDEX "answerIndex"
    ON public.answers USING brin
    (a_id)
    TABLESPACE pg_default;

COMMENT ON INDEX public."answerIndex"
    IS 'indexes answer ids';

TABLESPACE pg_default;

ALTER TABLE public.answers
    OWNER to postgres;



CREATE TABLE public.photos
(
    id integer NOT NULL,
    url text COLLATE pg_catalog."default",
    CONSTRAINT photos_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.photos
    OWNER to postgres;