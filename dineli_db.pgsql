--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: affUrls; Type: TABLE; Schema: public; Owner: dineli_admin; Tablespace: 
--

CREATE TABLE "affUrls" (
    id integer NOT NULL,
    "userId" integer,
    url character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."affUrls" OWNER TO dineli_admin;

--
-- Name: affUrls_id_seq; Type: SEQUENCE; Schema: public; Owner: dineli_admin
--

CREATE SEQUENCE "affUrls_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."affUrls_id_seq" OWNER TO dineli_admin;

--
-- Name: affUrls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dineli_admin
--

ALTER SEQUENCE "affUrls_id_seq" OWNED BY "affUrls".id;


--
-- Name: blogs; Type: TABLE; Schema: public; Owner: dineli_admin; Tablespace: 
--

CREATE TABLE blogs (
    id integer NOT NULL,
    "userId" integer,
    title character varying(255),
    thumbnail character varying(255),
    content bytea,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.blogs OWNER TO dineli_admin;

--
-- Name: blogs_id_seq; Type: SEQUENCE; Schema: public; Owner: dineli_admin
--

CREATE SEQUENCE blogs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.blogs_id_seq OWNER TO dineli_admin;

--
-- Name: blogs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dineli_admin
--

ALTER SEQUENCE blogs_id_seq OWNED BY blogs.id;


--
-- Name: carts; Type: TABLE; Schema: public; Owner: dineli_admin; Tablespace: 
--

CREATE TABLE carts (
    id integer NOT NULL,
    "userId" integer,
    "propertyId" integer,
    "purchasePrice" double precision,
    quantity integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.carts OWNER TO dineli_admin;

--
-- Name: carts_id_seq; Type: SEQUENCE; Schema: public; Owner: dineli_admin
--

CREATE SEQUENCE carts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.carts_id_seq OWNER TO dineli_admin;

--
-- Name: carts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dineli_admin
--

ALTER SEQUENCE carts_id_seq OWNED BY carts.id;


--
-- Name: comments; Type: TABLE; Schema: public; Owner: dineli_admin; Tablespace: 
--

CREATE TABLE comments (
    id integer NOT NULL,
    "userId" integer,
    "blogId" integer,
    title character varying(255),
    content bytea,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.comments OWNER TO dineli_admin;

--
-- Name: comments_id_seq; Type: SEQUENCE; Schema: public; Owner: dineli_admin
--

CREATE SEQUENCE comments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comments_id_seq OWNER TO dineli_admin;

--
-- Name: comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dineli_admin
--

ALTER SEQUENCE comments_id_seq OWNED BY comments.id;


--
-- Name: lifeCustomers; Type: TABLE; Schema: public; Owner: dineli_admin; Tablespace: 
--

CREATE TABLE "lifeCustomers" (
    id integer NOT NULL,
    "userId" integer,
    status integer,
    "totalPrice" double precision,
    count integer,
    "paymentMethod" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."lifeCustomers" OWNER TO dineli_admin;

--
-- Name: lifeCustomers_id_seq; Type: SEQUENCE; Schema: public; Owner: dineli_admin
--

CREATE SEQUENCE "lifeCustomers_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."lifeCustomers_id_seq" OWNER TO dineli_admin;

--
-- Name: lifeCustomers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dineli_admin
--

ALTER SEQUENCE "lifeCustomers_id_seq" OWNED BY "lifeCustomers".id;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: dineli_admin; Tablespace: 
--

CREATE TABLE orders (
    id integer NOT NULL,
    "userId" integer,
    status integer,
    "totalPrice" double precision,
    count integer,
    "paymentMethod" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "paymentTypeId" integer
);


ALTER TABLE public.orders OWNER TO dineli_admin;

--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: dineli_admin
--

CREATE SEQUENCE orders_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_id_seq OWNER TO dineli_admin;

--
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dineli_admin
--

ALTER SEQUENCE orders_id_seq OWNED BY orders.id;


--
-- Name: paymentTypes; Type: TABLE; Schema: public; Owner: dineli_admin; Tablespace: 
--

CREATE TABLE "paymentTypes" (
    id integer NOT NULL,
    name character varying(255),
    other character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."paymentTypes" OWNER TO dineli_admin;

--
-- Name: paymentTypes_id_seq; Type: SEQUENCE; Schema: public; Owner: dineli_admin
--

CREATE SEQUENCE "paymentTypes_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."paymentTypes_id_seq" OWNER TO dineli_admin;

--
-- Name: paymentTypes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dineli_admin
--

ALTER SEQUENCE "paymentTypes_id_seq" OWNED BY "paymentTypes".id;


--
-- Name: payouts; Type: TABLE; Schema: public; Owner: dineli_admin; Tablespace: 
--

CREATE TABLE payouts (
    id integer NOT NULL,
    "userId" integer,
    amount double precision,
    "payMethod" integer,
    status integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.payouts OWNER TO dineli_admin;

--
-- Name: payouts_id_seq; Type: SEQUENCE; Schema: public; Owner: dineli_admin
--

CREATE SEQUENCE payouts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.payouts_id_seq OWNER TO dineli_admin;

--
-- Name: payouts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dineli_admin
--

ALTER SEQUENCE payouts_id_seq OWNED BY payouts.id;


--
-- Name: properties; Type: TABLE; Schema: public; Owner: dineli_admin; Tablespace: 
--

CREATE TABLE properties (
    id integer NOT NULL,
    address1 character varying(255),
    address2 character varying(255),
    pos_latitude double precision,
    pos_longitude double precision,
    "imageData" text,
    "rentStartsDate" timestamp with time zone,
    "yearlyRentPerToken" double precision,
    "tokenValue" double precision,
    "generatedToken" double precision,
    "propertyType" character varying(255),
    neighborhood character varying(255),
    "squareFeet" double precision,
    "lotSize" double precision,
    "bedroomOrBath" character varying(255),
    "constructionYear" double precision,
    "currentStatusOfProperty" character varying(255),
    section8 character varying(255),
    "yearlyGrossRent" double precision,
    "monthlyCosts" double precision,
    "_propertyManagement" double precision,
    _platform double precision,
    "_propertyTaxes" double precision,
    _insurance double precision,
    _utilities character varying(255),
    "_underlyingAssetPrice" double precision,
    "_listingFee" double precision,
    "_initialMaintenanceReserve" double precision,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.properties OWNER TO dineli_admin;

--
-- Name: properties_id_seq; Type: SEQUENCE; Schema: public; Owner: dineli_admin
--

CREATE SEQUENCE properties_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.properties_id_seq OWNER TO dineli_admin;

--
-- Name: properties_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dineli_admin
--

ALTER SEQUENCE properties_id_seq OWNED BY properties.id;


--
-- Name: referrals; Type: TABLE; Schema: public; Owner: dineli_admin; Tablespace: 
--

CREATE TABLE referrals (
    id integer NOT NULL,
    "userId" integer,
    customer integer,
    amount double precision,
    description character varying(255),
    status integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.referrals OWNER TO dineli_admin;

--
-- Name: referrals_id_seq; Type: SEQUENCE; Schema: public; Owner: dineli_admin
--

CREATE SEQUENCE referrals_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.referrals_id_seq OWNER TO dineli_admin;

--
-- Name: referrals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dineli_admin
--

ALTER SEQUENCE referrals_id_seq OWNED BY referrals.id;


--
-- Name: roles; Type: TABLE; Schema: public; Owner: dineli_admin; Tablespace: 
--

CREATE TABLE roles (
    id integer NOT NULL,
    name character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.roles OWNER TO dineli_admin;

--
-- Name: settings; Type: TABLE; Schema: public; Owner: dineli_admin; Tablespace: 
--

CREATE TABLE settings (
    id integer NOT NULL,
    "userId" integer,
    "customSlug" character varying(255),
    "enableNewNotify" boolean,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.settings OWNER TO dineli_admin;

--
-- Name: settings_id_seq; Type: SEQUENCE; Schema: public; Owner: dineli_admin
--

CREATE SEQUENCE settings_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.settings_id_seq OWNER TO dineli_admin;

--
-- Name: settings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dineli_admin
--

ALTER SEQUENCE settings_id_seq OWNED BY settings.id;


--
-- Name: sites; Type: TABLE; Schema: public; Owner: dineli_admin; Tablespace: 
--

CREATE TABLE sites (
    id integer NOT NULL,
    title character varying(255),
    description character varying(255),
    keywords character varying(255),
    address character varying(255),
    telephone character varying(255),
    language character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.sites OWNER TO dineli_admin;

--
-- Name: sites_id_seq; Type: SEQUENCE; Schema: public; Owner: dineli_admin
--

CREATE SEQUENCE sites_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sites_id_seq OWNER TO dineli_admin;

--
-- Name: sites_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dineli_admin
--

ALTER SEQUENCE sites_id_seq OWNED BY sites.id;


--
-- Name: teams; Type: TABLE; Schema: public; Owner: dineli_admin; Tablespace: 
--

CREATE TABLE teams (
    id integer NOT NULL,
    name character varying(255),
    job character varying(255),
    avatar character varying(255),
    content bytea,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.teams OWNER TO dineli_admin;

--
-- Name: teams_id_seq; Type: SEQUENCE; Schema: public; Owner: dineli_admin
--

CREATE SEQUENCE teams_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.teams_id_seq OWNER TO dineli_admin;

--
-- Name: teams_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dineli_admin
--

ALTER SEQUENCE teams_id_seq OWNED BY teams.id;


--
-- Name: tokens; Type: TABLE; Schema: public; Owner: dineli_admin; Tablespace: 
--

CREATE TABLE tokens (
    id integer NOT NULL,
    "userId" integer,
    "propertyId" integer,
    "purchasePrice" double precision,
    quantity integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.tokens OWNER TO dineli_admin;

--
-- Name: tokens_id_seq; Type: SEQUENCE; Schema: public; Owner: dineli_admin
--

CREATE SEQUENCE tokens_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tokens_id_seq OWNER TO dineli_admin;

--
-- Name: tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dineli_admin
--

ALTER SEQUENCE tokens_id_seq OWNED BY tokens.id;


--
-- Name: user_roles; Type: TABLE; Schema: public; Owner: dineli_admin; Tablespace: 
--

CREATE TABLE user_roles (
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "roleId" integer NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public.user_roles OWNER TO dineli_admin;

--
-- Name: users; Type: TABLE; Schema: public; Owner: dineli_admin; Tablespace: 
--

CREATE TABLE users (
    id integer NOT NULL,
    firstname character varying(255),
    lastname character varying(255),
    phone character varying(255),
    citizen character varying(255),
    username character varying(255),
    email character varying(255),
    password character varying(255),
    "isActive" boolean,
    "verificationString" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.users OWNER TO dineli_admin;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: dineli_admin
--

CREATE SEQUENCE users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO dineli_admin;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dineli_admin
--

ALTER SEQUENCE users_id_seq OWNED BY users.id;


--
-- Name: verifies; Type: TABLE; Schema: public; Owner: dineli_admin; Tablespace: 
--

CREATE TABLE verifies (
    id integer NOT NULL,
    "userId" integer,
    content character varying(255),
    "isVerified" boolean,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.verifies OWNER TO dineli_admin;

--
-- Name: verifies_id_seq; Type: SEQUENCE; Schema: public; Owner: dineli_admin
--

CREATE SEQUENCE verifies_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.verifies_id_seq OWNER TO dineli_admin;

--
-- Name: verifies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dineli_admin
--

ALTER SEQUENCE verifies_id_seq OWNED BY verifies.id;


--
-- Name: visits; Type: TABLE; Schema: public; Owner: dineli_admin; Tablespace: 
--

CREATE TABLE visits (
    id integer NOT NULL,
    "userId" integer,
    url character varying(255),
    "refferUrl" character varying(255),
    "isConverted" boolean,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.visits OWNER TO dineli_admin;

--
-- Name: visits_id_seq; Type: SEQUENCE; Schema: public; Owner: dineli_admin
--

CREATE SEQUENCE visits_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.visits_id_seq OWNER TO dineli_admin;

--
-- Name: visits_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dineli_admin
--

ALTER SEQUENCE visits_id_seq OWNED BY visits.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: dineli_admin
--

ALTER TABLE ONLY "affUrls" ALTER COLUMN id SET DEFAULT nextval('"affUrls_id_seq"'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: dineli_admin
--

ALTER TABLE ONLY blogs ALTER COLUMN id SET DEFAULT nextval('blogs_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: dineli_admin
--

ALTER TABLE ONLY carts ALTER COLUMN id SET DEFAULT nextval('carts_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: dineli_admin
--

ALTER TABLE ONLY comments ALTER COLUMN id SET DEFAULT nextval('comments_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: dineli_admin
--

ALTER TABLE ONLY "lifeCustomers" ALTER COLUMN id SET DEFAULT nextval('"lifeCustomers_id_seq"'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: dineli_admin
--

ALTER TABLE ONLY orders ALTER COLUMN id SET DEFAULT nextval('orders_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: dineli_admin
--

ALTER TABLE ONLY "paymentTypes" ALTER COLUMN id SET DEFAULT nextval('"paymentTypes_id_seq"'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: dineli_admin
--

ALTER TABLE ONLY payouts ALTER COLUMN id SET DEFAULT nextval('payouts_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: dineli_admin
--

ALTER TABLE ONLY properties ALTER COLUMN id SET DEFAULT nextval('properties_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: dineli_admin
--

ALTER TABLE ONLY referrals ALTER COLUMN id SET DEFAULT nextval('referrals_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: dineli_admin
--

ALTER TABLE ONLY settings ALTER COLUMN id SET DEFAULT nextval('settings_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: dineli_admin
--

ALTER TABLE ONLY sites ALTER COLUMN id SET DEFAULT nextval('sites_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: dineli_admin
--

ALTER TABLE ONLY teams ALTER COLUMN id SET DEFAULT nextval('teams_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: dineli_admin
--

ALTER TABLE ONLY tokens ALTER COLUMN id SET DEFAULT nextval('tokens_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: dineli_admin
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: dineli_admin
--

ALTER TABLE ONLY verifies ALTER COLUMN id SET DEFAULT nextval('verifies_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: dineli_admin
--

ALTER TABLE ONLY visits ALTER COLUMN id SET DEFAULT nextval('visits_id_seq'::regclass);


--
-- Data for Name: affUrls; Type: TABLE DATA; Schema: public; Owner: dineli_admin
--

COPY "affUrls" (id, "userId", url, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: affUrls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dineli_admin
--

SELECT pg_catalog.setval('"affUrls_id_seq"', 1, false);


--
-- Data for Name: blogs; Type: TABLE DATA; Schema: public; Owner: dineli_admin
--

COPY blogs (id, "userId", title, thumbnail, content, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: blogs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dineli_admin
--

SELECT pg_catalog.setval('blogs_id_seq', 1, false);


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: dineli_admin
--

COPY carts (id, "userId", "propertyId", "purchasePrice", quantity, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: carts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dineli_admin
--

SELECT pg_catalog.setval('carts_id_seq', 1, false);


--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: dineli_admin
--

COPY comments (id, "userId", "blogId", title, content, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dineli_admin
--

SELECT pg_catalog.setval('comments_id_seq', 1, false);


--
-- Data for Name: lifeCustomers; Type: TABLE DATA; Schema: public; Owner: dineli_admin
--

COPY "lifeCustomers" (id, "userId", status, "totalPrice", count, "paymentMethod", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: lifeCustomers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dineli_admin
--

SELECT pg_catalog.setval('"lifeCustomers_id_seq"', 1, false);


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: dineli_admin
--

COPY orders (id, "userId", status, "totalPrice", count, "paymentMethod", "createdAt", "updatedAt", "paymentTypeId") FROM stdin;
\.


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dineli_admin
--

SELECT pg_catalog.setval('orders_id_seq', 1, false);


--
-- Data for Name: paymentTypes; Type: TABLE DATA; Schema: public; Owner: dineli_admin
--

COPY "paymentTypes" (id, name, other, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: paymentTypes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dineli_admin
--

SELECT pg_catalog.setval('"paymentTypes_id_seq"', 1, false);


--
-- Data for Name: payouts; Type: TABLE DATA; Schema: public; Owner: dineli_admin
--

COPY payouts (id, "userId", amount, "payMethod", status, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: payouts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dineli_admin
--

SELECT pg_catalog.setval('payouts_id_seq', 1, false);


--
-- Data for Name: properties; Type: TABLE DATA; Schema: public; Owner: dineli_admin
--

COPY properties (id, address1, address2, pos_latitude, pos_longitude, "imageData", "rentStartsDate", "yearlyRentPerToken", "tokenValue", "generatedToken", "propertyType", neighborhood, "squareFeet", "lotSize", "bedroomOrBath", "constructionYear", "currentStatusOfProperty", section8, "yearlyGrossRent", "monthlyCosts", "_propertyManagement", _platform, "_propertyTaxes", _insurance, _utilities, "_underlyingAssetPrice", "_listingFee", "_initialMaintenanceReserve", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: properties_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dineli_admin
--

SELECT pg_catalog.setval('properties_id_seq', 1, false);


--
-- Data for Name: referrals; Type: TABLE DATA; Schema: public; Owner: dineli_admin
--

COPY referrals (id, "userId", customer, amount, description, status, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: referrals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dineli_admin
--

SELECT pg_catalog.setval('referrals_id_seq', 1, false);


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: dineli_admin
--

COPY roles (id, name, "createdAt", "updatedAt") FROM stdin;
1	user	2021-07-23 16:40:43.906+02	2021-07-23 16:40:43.906+02
2	moderator	2021-07-23 16:40:43.907+02	2021-07-23 16:40:43.907+02
3	admin	2021-07-23 16:40:43.907+02	2021-07-23 16:40:43.907+02
\.


--
-- Data for Name: settings; Type: TABLE DATA; Schema: public; Owner: dineli_admin
--

COPY settings (id, "userId", "customSlug", "enableNewNotify", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: settings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dineli_admin
--

SELECT pg_catalog.setval('settings_id_seq', 1, false);


--
-- Data for Name: sites; Type: TABLE DATA; Schema: public; Owner: dineli_admin
--

COPY sites (id, title, description, keywords, address, telephone, language, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: sites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dineli_admin
--

SELECT pg_catalog.setval('sites_id_seq', 1, false);


--
-- Data for Name: teams; Type: TABLE DATA; Schema: public; Owner: dineli_admin
--

COPY teams (id, name, job, avatar, content, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: teams_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dineli_admin
--

SELECT pg_catalog.setval('teams_id_seq', 1, false);


--
-- Data for Name: tokens; Type: TABLE DATA; Schema: public; Owner: dineli_admin
--

COPY tokens (id, "userId", "propertyId", "purchasePrice", quantity, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dineli_admin
--

SELECT pg_catalog.setval('tokens_id_seq', 1, false);


--
-- Data for Name: user_roles; Type: TABLE DATA; Schema: public; Owner: dineli_admin
--

COPY user_roles ("createdAt", "updatedAt", "roleId", "userId") FROM stdin;
2021-07-23 18:23:41.92+02	2021-07-23 18:23:41.92+02	3	1
2021-07-29 13:59:07.202+02	2021-07-29 13:59:07.202+02	1	3
2021-07-30 18:40:34.49+02	2021-07-30 18:40:34.49+02	1	4
2021-07-30 20:29:01.591+02	2021-07-30 20:29:01.591+02	1	5
2021-08-02 09:03:47.581+02	2021-08-02 09:03:47.581+02	1	9
2021-08-25 10:39:18.48+02	2021-08-25 10:39:18.48+02	1	11
2021-08-25 10:40:14.388+02	2021-08-25 10:40:14.388+02	1	12
2021-08-27 06:43:07.978+02	2021-08-27 06:43:07.978+02	1	14
2021-08-27 06:44:03.555+02	2021-08-27 06:44:03.555+02	1	15
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: dineli_admin
--

COPY users (id, firstname, lastname, phone, citizen, username, email, password, "isActive", "verificationString", "createdAt", "updatedAt") FROM stdin;
12	a	a	11111	0	a	devok121212@gmail.com	$2a$08$/8nw.vlvmryF9hkIpd92uOAUvfPfvmpLg1uluvJ1h5ZeHYXRpnHnG	t	l0npoolc16r8562bnazv	2021-08-25 10:40:14.364+02	2021-08-25 10:42:41.934+02
3	Sohail	Bajwa	03006903589	0	Bajwa	sohail_bajwa@yahoo.com	$2a$08$NVhJc4QpYPHfu7Q6IINbKuFAAEY9WPnL8RImJX/5xbcYjNIRX.1y6	\N	$2a$08$xeYbF7GzZQY7doU.6YMPV.bq3KQEgz9cJBrz9T6djD.CdF2aCmqry	2021-07-29 13:59:07.149+02	2021-07-29 13:59:07.149+02
1	Sohail	Bajwa	+923006903589	0	Facilitator	libra9012@gmail.com	$2a$08$CEvFPc5MariecpyPI7wL.OndZ5PrXpN6HJY/wlHej7A1d.sx7MLga	t	$2a$08$mHF/fcvG/KTCuvBAyD2O0.D8DabpvRkr2ANwS7N6S3069r030LEK.	2021-07-23 18:23:41.875+02	2021-08-25 09:05:04.983+02
14	aaa	aaa	12487754455	1	aaaa	marina.ivanova.20210@gmail.com	$2a$08$WofymQ5oNB043hSHK2V6Z.C0sKSnFXIrFjxjPGApMgLmgqbfnjkXK	\N	orrfazguxhg7ibruzy5uc	2021-08-27 06:43:07.766+02	2021-08-27 06:43:07.766+02
15	aaa	aaa	12487754455	1	aaee	vassul.man@gmail.com	$2a$08$2G74vBZ.jUEjXNG0XTi7ieXgvRtXydlC8VbO0R3BC6pLCKzcDCnXK	t	zsmkkj579obpkfue9hjaq8	2021-08-27 06:44:03.536+02	2021-08-27 06:44:33.99+02
5	Dineli	Dineli	+1302020495	0	Dineli	dineli.comm@gmail.com	$2a$08$RxAXVuMfi72Dk0FzR3RtFO.oBgyOM9O4GbdaLOnsCwrd6am91tTxW	\N	$2a$08$j7hxFEfoFYi4qU/LVPA4vOkoMA2o3nUxaqZgTqRV0SEaoUhXQXfNi	2021-07-30 20:29:01.536+02	2021-07-30 20:29:01.536+02
9	Geoffry	Fernandez	03006903588	0	Geoff	parrotchannel1@gmail.com	$2a$08$N9mUj6/sOMQERHdh0hEgdugAGbo9uEDBbQezMFJiv.4hEFOb9EBAG	t	gl94rj10l9f77fdn9uea4m	2021-08-02 09:03:47.32+02	2021-08-02 09:04:01.815+02
4	Michael	Joe	+1234505678	0	Michael	sohail_bajwa@hotmail.com	$2a$08$Bp9kMNepy0lOjN4n39WG9uR6hzXXBMXryK3ueJ2B3UK35.7rqKZ0.	\N	$2a$08$zLpIie8HD73cJp5MQ8pC/OQQa/EQ7jpQlu25uW1tc23ICPj01hUFO	2021-07-30 18:40:34.385+02	2021-07-30 18:40:34.385+02
11	a	a	11111	0	aa	a@a.com	$2a$08$qa8AXgGMX9xk87Yyk9Fz/.KLW1InqkYsGREm1faxsh6qJdlMM3mPe	\N	91lsq9jistulr553koxp1	2021-08-25 10:39:18.431+02	2021-08-25 10:39:18.431+02
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dineli_admin
--

SELECT pg_catalog.setval('users_id_seq', 15, true);


--
-- Data for Name: verifies; Type: TABLE DATA; Schema: public; Owner: dineli_admin
--

COPY verifies (id, "userId", content, "isVerified", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: verifies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dineli_admin
--

SELECT pg_catalog.setval('verifies_id_seq', 1, false);


--
-- Data for Name: visits; Type: TABLE DATA; Schema: public; Owner: dineli_admin
--

COPY visits (id, "userId", url, "refferUrl", "isConverted", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: visits_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dineli_admin
--

SELECT pg_catalog.setval('visits_id_seq', 1, false);


--
-- Name: affUrls_pkey; Type: CONSTRAINT; Schema: public; Owner: dineli_admin; Tablespace: 
--

ALTER TABLE ONLY "affUrls"
    ADD CONSTRAINT "affUrls_pkey" PRIMARY KEY (id);


--
-- Name: blogs_pkey; Type: CONSTRAINT; Schema: public; Owner: dineli_admin; Tablespace: 
--

ALTER TABLE ONLY blogs
    ADD CONSTRAINT blogs_pkey PRIMARY KEY (id);


--
-- Name: carts_pkey; Type: CONSTRAINT; Schema: public; Owner: dineli_admin; Tablespace: 
--

ALTER TABLE ONLY carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY (id);


--
-- Name: comments_pkey; Type: CONSTRAINT; Schema: public; Owner: dineli_admin; Tablespace: 
--

ALTER TABLE ONLY comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);


--
-- Name: lifeCustomers_pkey; Type: CONSTRAINT; Schema: public; Owner: dineli_admin; Tablespace: 
--

ALTER TABLE ONLY "lifeCustomers"
    ADD CONSTRAINT "lifeCustomers_pkey" PRIMARY KEY (id);


--
-- Name: orders_pkey; Type: CONSTRAINT; Schema: public; Owner: dineli_admin; Tablespace: 
--

ALTER TABLE ONLY orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: paymentTypes_pkey; Type: CONSTRAINT; Schema: public; Owner: dineli_admin; Tablespace: 
--

ALTER TABLE ONLY "paymentTypes"
    ADD CONSTRAINT "paymentTypes_pkey" PRIMARY KEY (id);


--
-- Name: payouts_pkey; Type: CONSTRAINT; Schema: public; Owner: dineli_admin; Tablespace: 
--

ALTER TABLE ONLY payouts
    ADD CONSTRAINT payouts_pkey PRIMARY KEY (id);


--
-- Name: properties_pkey; Type: CONSTRAINT; Schema: public; Owner: dineli_admin; Tablespace: 
--

ALTER TABLE ONLY properties
    ADD CONSTRAINT properties_pkey PRIMARY KEY (id);


--
-- Name: referrals_pkey; Type: CONSTRAINT; Schema: public; Owner: dineli_admin; Tablespace: 
--

ALTER TABLE ONLY referrals
    ADD CONSTRAINT referrals_pkey PRIMARY KEY (id);


--
-- Name: roles_pkey; Type: CONSTRAINT; Schema: public; Owner: dineli_admin; Tablespace: 
--

ALTER TABLE ONLY roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- Name: settings_pkey; Type: CONSTRAINT; Schema: public; Owner: dineli_admin; Tablespace: 
--

ALTER TABLE ONLY settings
    ADD CONSTRAINT settings_pkey PRIMARY KEY (id);


--
-- Name: sites_pkey; Type: CONSTRAINT; Schema: public; Owner: dineli_admin; Tablespace: 
--

ALTER TABLE ONLY sites
    ADD CONSTRAINT sites_pkey PRIMARY KEY (id);


--
-- Name: teams_pkey; Type: CONSTRAINT; Schema: public; Owner: dineli_admin; Tablespace: 
--

ALTER TABLE ONLY teams
    ADD CONSTRAINT teams_pkey PRIMARY KEY (id);


--
-- Name: tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: dineli_admin; Tablespace: 
--

ALTER TABLE ONLY tokens
    ADD CONSTRAINT tokens_pkey PRIMARY KEY (id);


--
-- Name: user_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: dineli_admin; Tablespace: 
--

ALTER TABLE ONLY user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY ("roleId", "userId");


--
-- Name: users_pkey; Type: CONSTRAINT; Schema: public; Owner: dineli_admin; Tablespace: 
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: verifies_pkey; Type: CONSTRAINT; Schema: public; Owner: dineli_admin; Tablespace: 
--

ALTER TABLE ONLY verifies
    ADD CONSTRAINT verifies_pkey PRIMARY KEY (id);


--
-- Name: visits_pkey; Type: CONSTRAINT; Schema: public; Owner: dineli_admin; Tablespace: 
--

ALTER TABLE ONLY visits
    ADD CONSTRAINT visits_pkey PRIMARY KEY (id);


--
-- Name: blogs_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dineli_admin
--

ALTER TABLE ONLY blogs
    ADD CONSTRAINT "blogs_userId_fkey" FOREIGN KEY ("userId") REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: carts_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dineli_admin
--

ALTER TABLE ONLY carts
    ADD CONSTRAINT "carts_userId_fkey" FOREIGN KEY ("userId") REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: comments_blogId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dineli_admin
--

ALTER TABLE ONLY comments
    ADD CONSTRAINT "comments_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES blogs(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: orders_paymentTypeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dineli_admin
--

ALTER TABLE ONLY orders
    ADD CONSTRAINT "orders_paymentTypeId_fkey" FOREIGN KEY ("paymentTypeId") REFERENCES "paymentTypes"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: orders_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dineli_admin
--

ALTER TABLE ONLY orders
    ADD CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_roles_roleId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dineli_admin
--

ALTER TABLE ONLY user_roles
    ADD CONSTRAINT "user_roles_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES roles(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_roles_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dineli_admin
--

ALTER TABLE ONLY user_roles
    ADD CONSTRAINT "user_roles_userId_fkey" FOREIGN KEY ("userId") REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: verifies_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dineli_admin
--

ALTER TABLE ONLY verifies
    ADD CONSTRAINT "verifies_userId_fkey" FOREIGN KEY ("userId") REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- Name: affUrls; Type: ACL; Schema: public; Owner: dineli_admin
--

REVOKE ALL ON TABLE "affUrls" FROM PUBLIC;
REVOKE ALL ON TABLE "affUrls" FROM dineli_admin;
GRANT ALL ON TABLE "affUrls" TO dineli_admin;
GRANT ALL ON TABLE "affUrls" TO dineli_db;


--
-- Name: blogs; Type: ACL; Schema: public; Owner: dineli_admin
--

REVOKE ALL ON TABLE blogs FROM PUBLIC;
REVOKE ALL ON TABLE blogs FROM dineli_admin;
GRANT ALL ON TABLE blogs TO dineli_admin;
GRANT ALL ON TABLE blogs TO dineli_db;


--
-- Name: carts; Type: ACL; Schema: public; Owner: dineli_admin
--

REVOKE ALL ON TABLE carts FROM PUBLIC;
REVOKE ALL ON TABLE carts FROM dineli_admin;
GRANT ALL ON TABLE carts TO dineli_admin;
GRANT ALL ON TABLE carts TO dineli_db;


--
-- Name: comments; Type: ACL; Schema: public; Owner: dineli_admin
--

REVOKE ALL ON TABLE comments FROM PUBLIC;
REVOKE ALL ON TABLE comments FROM dineli_admin;
GRANT ALL ON TABLE comments TO dineli_admin;
GRANT ALL ON TABLE comments TO dineli_db;


--
-- Name: lifeCustomers; Type: ACL; Schema: public; Owner: dineli_admin
--

REVOKE ALL ON TABLE "lifeCustomers" FROM PUBLIC;
REVOKE ALL ON TABLE "lifeCustomers" FROM dineli_admin;
GRANT ALL ON TABLE "lifeCustomers" TO dineli_admin;
GRANT ALL ON TABLE "lifeCustomers" TO dineli_db;


--
-- Name: orders; Type: ACL; Schema: public; Owner: dineli_admin
--

REVOKE ALL ON TABLE orders FROM PUBLIC;
REVOKE ALL ON TABLE orders FROM dineli_admin;
GRANT ALL ON TABLE orders TO dineli_admin;
GRANT ALL ON TABLE orders TO dineli_db;


--
-- Name: paymentTypes; Type: ACL; Schema: public; Owner: dineli_admin
--

REVOKE ALL ON TABLE "paymentTypes" FROM PUBLIC;
REVOKE ALL ON TABLE "paymentTypes" FROM dineli_admin;
GRANT ALL ON TABLE "paymentTypes" TO dineli_admin;
GRANT ALL ON TABLE "paymentTypes" TO dineli_db;


--
-- Name: payouts; Type: ACL; Schema: public; Owner: dineli_admin
--

REVOKE ALL ON TABLE payouts FROM PUBLIC;
REVOKE ALL ON TABLE payouts FROM dineli_admin;
GRANT ALL ON TABLE payouts TO dineli_admin;
GRANT ALL ON TABLE payouts TO dineli_db;


--
-- Name: properties; Type: ACL; Schema: public; Owner: dineli_admin
--

REVOKE ALL ON TABLE properties FROM PUBLIC;
REVOKE ALL ON TABLE properties FROM dineli_admin;
GRANT ALL ON TABLE properties TO dineli_admin;
GRANT ALL ON TABLE properties TO dineli_db;


--
-- Name: referrals; Type: ACL; Schema: public; Owner: dineli_admin
--

REVOKE ALL ON TABLE referrals FROM PUBLIC;
REVOKE ALL ON TABLE referrals FROM dineli_admin;
GRANT ALL ON TABLE referrals TO dineli_admin;
GRANT ALL ON TABLE referrals TO dineli_db;


--
-- Name: roles; Type: ACL; Schema: public; Owner: dineli_admin
--

REVOKE ALL ON TABLE roles FROM PUBLIC;
REVOKE ALL ON TABLE roles FROM dineli_admin;
GRANT ALL ON TABLE roles TO dineli_admin;
GRANT ALL ON TABLE roles TO dineli_db;


--
-- Name: settings; Type: ACL; Schema: public; Owner: dineli_admin
--

REVOKE ALL ON TABLE settings FROM PUBLIC;
REVOKE ALL ON TABLE settings FROM dineli_admin;
GRANT ALL ON TABLE settings TO dineli_admin;
GRANT ALL ON TABLE settings TO dineli_db;


--
-- Name: sites; Type: ACL; Schema: public; Owner: dineli_admin
--

REVOKE ALL ON TABLE sites FROM PUBLIC;
REVOKE ALL ON TABLE sites FROM dineli_admin;
GRANT ALL ON TABLE sites TO dineli_admin;
GRANT ALL ON TABLE sites TO dineli_db;


--
-- Name: teams; Type: ACL; Schema: public; Owner: dineli_admin
--

REVOKE ALL ON TABLE teams FROM PUBLIC;
REVOKE ALL ON TABLE teams FROM dineli_admin;
GRANT ALL ON TABLE teams TO dineli_admin;
GRANT ALL ON TABLE teams TO dineli_db;


--
-- Name: tokens; Type: ACL; Schema: public; Owner: dineli_admin
--

REVOKE ALL ON TABLE tokens FROM PUBLIC;
REVOKE ALL ON TABLE tokens FROM dineli_admin;
GRANT ALL ON TABLE tokens TO dineli_admin;
GRANT ALL ON TABLE tokens TO dineli_db;


--
-- Name: user_roles; Type: ACL; Schema: public; Owner: dineli_admin
--

REVOKE ALL ON TABLE user_roles FROM PUBLIC;
REVOKE ALL ON TABLE user_roles FROM dineli_admin;
GRANT ALL ON TABLE user_roles TO dineli_admin;
GRANT ALL ON TABLE user_roles TO dineli_db;


--
-- Name: users; Type: ACL; Schema: public; Owner: dineli_admin
--

REVOKE ALL ON TABLE users FROM PUBLIC;
REVOKE ALL ON TABLE users FROM dineli_admin;
GRANT ALL ON TABLE users TO dineli_admin;
GRANT ALL ON TABLE users TO dineli_db;


--
-- Name: verifies; Type: ACL; Schema: public; Owner: dineli_admin
--

REVOKE ALL ON TABLE verifies FROM PUBLIC;
REVOKE ALL ON TABLE verifies FROM dineli_admin;
GRANT ALL ON TABLE verifies TO dineli_admin;
GRANT ALL ON TABLE verifies TO dineli_db;


--
-- Name: visits; Type: ACL; Schema: public; Owner: dineli_admin
--

REVOKE ALL ON TABLE visits FROM PUBLIC;
REVOKE ALL ON TABLE visits FROM dineli_admin;
GRANT ALL ON TABLE visits TO dineli_admin;
GRANT ALL ON TABLE visits TO dineli_db;


--
-- PostgreSQL database dump complete
--

