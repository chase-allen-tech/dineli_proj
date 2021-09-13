--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: affUrls; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."affUrls" (
    id integer NOT NULL,
    "userId" integer,
    url character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."affUrls" OWNER TO postgres;

--
-- Name: affUrls_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."affUrls_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."affUrls_id_seq" OWNER TO postgres;

--
-- Name: affUrls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."affUrls_id_seq" OWNED BY public."affUrls".id;


--
-- Name: blogs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.blogs (
    id integer NOT NULL,
    "userId" integer,
    title character varying(255),
    thumbnail character varying(255),
    content character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    date date
);


ALTER TABLE public.blogs OWNER TO postgres;

--
-- Name: blogs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.blogs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.blogs_id_seq OWNER TO postgres;

--
-- Name: blogs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.blogs_id_seq OWNED BY public.blogs.id;


--
-- Name: carts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.carts (
    id integer NOT NULL,
    "userId" integer,
    "propertyId" integer,
    "purchasePrice" double precision,
    quantity integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.carts OWNER TO postgres;

--
-- Name: carts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.carts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.carts_id_seq OWNER TO postgres;

--
-- Name: carts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.carts_id_seq OWNED BY public.carts.id;


--
-- Name: comments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comments (
    id integer NOT NULL,
    "userId" integer,
    "blogId" integer,
    title character varying(255),
    content bytea,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.comments OWNER TO postgres;

--
-- Name: comments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.comments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comments_id_seq OWNER TO postgres;

--
-- Name: comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.comments_id_seq OWNED BY public.comments.id;


--
-- Name: faqs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.faqs (
    id integer NOT NULL,
    title character varying(255),
    description character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.faqs OWNER TO postgres;

--
-- Name: faqs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.faqs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.faqs_id_seq OWNER TO postgres;

--
-- Name: faqs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.faqs_id_seq OWNED BY public.faqs.id;


--
-- Name: lifeCustomers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."lifeCustomers" (
    id integer NOT NULL,
    "userId" integer,
    status integer,
    "totalPrice" double precision,
    count integer,
    "paymentMethod" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."lifeCustomers" OWNER TO postgres;

--
-- Name: lifeCustomers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."lifeCustomers_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."lifeCustomers_id_seq" OWNER TO postgres;

--
-- Name: lifeCustomers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."lifeCustomers_id_seq" OWNED BY public."lifeCustomers".id;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    "userId" integer,
    status character varying(255),
    "totalPrice" double precision,
    count integer,
    "paymentMethod" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "paymentTypeId" integer,
    details character varying(2550)
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_id_seq OWNER TO postgres;

--
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- Name: paymentTypes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."paymentTypes" (
    id integer NOT NULL,
    name character varying(255),
    other character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."paymentTypes" OWNER TO postgres;

--
-- Name: paymentTypes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."paymentTypes_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."paymentTypes_id_seq" OWNER TO postgres;

--
-- Name: paymentTypes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."paymentTypes_id_seq" OWNED BY public."paymentTypes".id;


--
-- Name: payouts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.payouts (
    id integer NOT NULL,
    "userId" integer,
    amount double precision,
    "payMethod" integer,
    status integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.payouts OWNER TO postgres;

--
-- Name: payouts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.payouts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.payouts_id_seq OWNER TO postgres;

--
-- Name: payouts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.payouts_id_seq OWNED BY public.payouts.id;


--
-- Name: properties; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.properties (
    id integer NOT NULL,
    address1 character varying(255),
    address2 character varying(255),
    pos_latitude double precision,
    pos_longitude double precision,
    "imageData" text,
    "rentStartsDate" timestamp with time zone,
    "monthlyRentPerToken" double precision,
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
    "monthlyGrossRent" double precision,
    "monthlyCosts" double precision,
    "propertyManagementFee" double precision,
    "platformFee" double precision,
    tax double precision,
    "insuranceFee" double precision,
    utility character varying(255),
    "assetPrice" double precision,
    fee double precision,
    "initMaintainanceReserve" double precision,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.properties OWNER TO postgres;

--
-- Name: properties_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.properties_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.properties_id_seq OWNER TO postgres;

--
-- Name: properties_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.properties_id_seq OWNED BY public.properties.id;


--
-- Name: referrals; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.referrals (
    id integer NOT NULL,
    "userId" integer,
    customer integer,
    amount double precision,
    description character varying(255),
    status integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.referrals OWNER TO postgres;

--
-- Name: referrals_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.referrals_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.referrals_id_seq OWNER TO postgres;

--
-- Name: referrals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.referrals_id_seq OWNED BY public.referrals.id;


--
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.roles OWNER TO postgres;

--
-- Name: settings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.settings (
    id integer NOT NULL,
    "userId" integer,
    "customSlug" character varying(255),
    "enableNewNotify" boolean,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.settings OWNER TO postgres;

--
-- Name: settings_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.settings_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.settings_id_seq OWNER TO postgres;

--
-- Name: settings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.settings_id_seq OWNED BY public.settings.id;


--
-- Name: sites; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sites (
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


ALTER TABLE public.sites OWNER TO postgres;

--
-- Name: sites_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sites_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sites_id_seq OWNER TO postgres;

--
-- Name: sites_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sites_id_seq OWNED BY public.sites.id;


--
-- Name: teams; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.teams (
    id integer NOT NULL,
    name character varying(255),
    job character varying(255),
    avatar character varying(255),
    content character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.teams OWNER TO postgres;

--
-- Name: teams_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.teams_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.teams_id_seq OWNER TO postgres;

--
-- Name: teams_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.teams_id_seq OWNED BY public.teams.id;


--
-- Name: tokens; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tokens (
    id integer NOT NULL,
    "userId" integer,
    "propertyId" integer,
    "purchasePrice" double precision,
    quantity integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "tokenAddress" character varying(255) NOT NULL,
    "salePrice" double precision NOT NULL,
    "tokenSymbol" character varying(255)
);


ALTER TABLE public.tokens OWNER TO postgres;

--
-- Name: tokens_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tokens_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tokens_id_seq OWNER TO postgres;

--
-- Name: tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tokens_id_seq OWNED BY public.tokens.id;


--
-- Name: user_roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_roles (
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "roleId" integer NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public.user_roles OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
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
    "updatedAt" timestamp with time zone NOT NULL,
    "walletAddress" character varying(255)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: verifies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.verifies (
    id integer NOT NULL,
    "userId" integer,
    content character varying(255),
    "isVerified" boolean,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.verifies OWNER TO postgres;

--
-- Name: verifies_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.verifies_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.verifies_id_seq OWNER TO postgres;

--
-- Name: verifies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.verifies_id_seq OWNED BY public.verifies.id;


--
-- Name: visits; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.visits (
    id integer NOT NULL,
    "userId" integer,
    url character varying(255),
    "refferUrl" character varying(255),
    "isConverted" boolean,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.visits OWNER TO postgres;

--
-- Name: visits_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.visits_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.visits_id_seq OWNER TO postgres;

--
-- Name: visits_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.visits_id_seq OWNED BY public.visits.id;


--
-- Name: affUrls id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."affUrls" ALTER COLUMN id SET DEFAULT nextval('public."affUrls_id_seq"'::regclass);


--
-- Name: blogs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blogs ALTER COLUMN id SET DEFAULT nextval('public.blogs_id_seq'::regclass);


--
-- Name: carts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carts ALTER COLUMN id SET DEFAULT nextval('public.carts_id_seq'::regclass);


--
-- Name: comments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments ALTER COLUMN id SET DEFAULT nextval('public.comments_id_seq'::regclass);


--
-- Name: faqs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.faqs ALTER COLUMN id SET DEFAULT nextval('public.faqs_id_seq'::regclass);


--
-- Name: lifeCustomers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."lifeCustomers" ALTER COLUMN id SET DEFAULT nextval('public."lifeCustomers_id_seq"'::regclass);


--
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- Name: paymentTypes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."paymentTypes" ALTER COLUMN id SET DEFAULT nextval('public."paymentTypes_id_seq"'::regclass);


--
-- Name: payouts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payouts ALTER COLUMN id SET DEFAULT nextval('public.payouts_id_seq'::regclass);


--
-- Name: properties id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.properties ALTER COLUMN id SET DEFAULT nextval('public.properties_id_seq'::regclass);


--
-- Name: referrals id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.referrals ALTER COLUMN id SET DEFAULT nextval('public.referrals_id_seq'::regclass);


--
-- Name: settings id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.settings ALTER COLUMN id SET DEFAULT nextval('public.settings_id_seq'::regclass);


--
-- Name: sites id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sites ALTER COLUMN id SET DEFAULT nextval('public.sites_id_seq'::regclass);


--
-- Name: teams id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teams ALTER COLUMN id SET DEFAULT nextval('public.teams_id_seq'::regclass);


--
-- Name: tokens id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tokens ALTER COLUMN id SET DEFAULT nextval('public.tokens_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: verifies id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.verifies ALTER COLUMN id SET DEFAULT nextval('public.verifies_id_seq'::regclass);


--
-- Name: visits id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.visits ALTER COLUMN id SET DEFAULT nextval('public.visits_id_seq'::regclass);


--
-- Data for Name: affUrls; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."affUrls" (id, "userId", url, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: blogs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.blogs (id, "userId", title, thumbnail, content, "createdAt", "updatedAt", date) FROM stdin;
12	1	blog1	1630736846331_cup1.png	blog1 content	2021-09-04 10:27:26.37+04	2021-09-04 10:27:26.37+04	2021-09-02
13	1	blog2	1630736874533_cup.png	blog2 content	2021-09-04 10:27:54.563+04	2021-09-04 10:27:54.563+04	2021-09-03
14	1	blog3	1630737375371_Ellipse_37.png	blog3 description	2021-09-04 10:36:15.412+04	2021-09-04 10:36:15.412+04	2021-09-03
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.carts (id, "userId", "propertyId", "purchasePrice", quantity, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.comments (id, "userId", "blogId", title, content, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: faqs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.faqs (id, title, description, "createdAt", "updatedAt") FROM stdin;
3	faq1	faq1 description	2021-09-04 07:55:45.438+04	2021-09-04 07:55:45.438+04
5	asdf	asdfasdf	2021-09-04 09:38:23.088+04	2021-09-04 09:38:23.088+04
\.


--
-- Data for Name: lifeCustomers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."lifeCustomers" (id, "userId", status, "totalPrice", count, "paymentMethod", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (id, "userId", status, "totalPrice", count, "paymentMethod", "createdAt", "updatedAt", "paymentTypeId", details) FROM stdin;
5	29	complete	20	4	paypal	2021-09-12 11:15:22.184+04	2021-09-12 11:24:17.227+04	\N	[{"tokenAddress":"0x711169eba29367425a45a2b6ee4b7c345befc0ad","tokenQuantity":"4","toAddress":"0x2bA919505Abe61170dd2c67BC5c6BDCb62ad54D7","hash":"0xdecf723c7d4af0f3a062ea542825e7d7577c1c8df0d34ea3437eca24c674643a"}]
6	29	complete	15	3	paypal	2021-09-12 11:23:24.539+04	2021-09-12 11:24:21.371+04	\N	[{"tokenAddress":"0x711169eba29367425a45a2b6ee4b7c345befc0ad","tokenQuantity":"3","toAddress":"0x2bA919505Abe61170dd2c67BC5c6BDCb62ad54D7","hash":"0xc78310ddeccf4b33fe98eb2a1367ae638ad7f46be2ae1ad46d0c3a389fb63f6b"}]
7	29	pending	25	5	paypal	2021-09-12 11:28:28.506+04	2021-09-12 11:28:28.506+04	\N	[{"tokenAddress":"0x711169eba29367425a45a2b6ee4b7c345befc0ad","tokenQuantity":"5","toAddress":"0x2bA919505Abe61170dd2c67BC5c6BDCb62ad54D7"}]
3	29	complete	160	21	paypal	2021-09-11 18:35:44.068+04	2021-09-12 09:51:17.228+04	\N	[{"tokenAddress":"0x711169eba29367425a45a2b6ee4b7c345befc0ad","tokenQuantity":"2","toAddress":"0x2bA919505Abe61170dd2c67BC5c6BDCb62ad54D7","hash":"0x62b712ca435f0b9f6744e58c8e7c7789a0c7861427e9e51b8723c2d68f944d7c"},{"tokenAddress":"0x6570865f7496336D9B68bEAeD40a48be4F31169b","tokenQuantity":"1","toAddress":"0x2bA919505Abe61170dd2c67BC5c6BDCb62ad54D7","hash":"0x43fdd145f17aa0320f4946efd1fb89e00b968a97a01134fcd2cfb3175c5dd676"}]
4	29	complete	40	8	paypal	2021-09-11 18:45:26.4+04	2021-09-12 09:51:22.317+04	\N	[{"tokenAddress":"0x711169eba29367425a45a2b6ee4b7c345befc0ad","tokenQuantity":"8","toAddress":"0x2bA919505Abe61170dd2c67BC5c6BDCb62ad54D7","hash":"0x094b9b97a749a4fb9fc5a272555641ac38f4be37b467d914525401ef8ed32cc4"}]
\.


--
-- Data for Name: paymentTypes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."paymentTypes" (id, name, other, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: payouts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.payouts (id, "userId", amount, "payMethod", status, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: properties; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.properties (id, address1, address2, pos_latitude, pos_longitude, "imageData", "rentStartsDate", "monthlyRentPerToken", "tokenValue", "generatedToken", "propertyType", neighborhood, "squareFeet", "lotSize", "bedroomOrBath", "constructionYear", "currentStatusOfProperty", section8, "monthlyGrossRent", "monthlyCosts", "propertyManagementFee", "platformFee", tax, "insuranceFee", utility, "assetPrice", fee, "initMaintainanceReserve", "createdAt", "updatedAt") FROM stdin;
12	Address1	Address1-2	\N	\N	1631186927302_4.png	2021-09-08 04:00:00+04	0.02	5	10000	multi	Sea A	25	12	10	2020	not	true	1000	160	80	20	25	20	tenant-paid	50000	15	1200	2021-09-09 15:28:47.339+04	2021-09-09 15:28:47.339+04
13	Address2	Address2-2	\N	\N	1631195272983_5.png	2021-09-07 04:00:00+04	0.43	150	1000	multi	Blue Garden	36	19	30	2021	partially	true	2500	430	200	50	100	50	tenant-paid	150000	30	2000	2021-09-09 17:47:53.053+04	2021-09-09 17:47:53.053+04
\.


--
-- Data for Name: referrals; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.referrals (id, "userId", customer, amount, description, status, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (id, name, "createdAt", "updatedAt") FROM stdin;
1	user	2021-07-23 18:40:43.906+04	2021-07-23 18:40:43.906+04
2	moderator	2021-07-23 18:40:43.907+04	2021-07-23 18:40:43.907+04
3	admin	2021-07-23 18:40:43.907+04	2021-07-23 18:40:43.907+04
\.


--
-- Data for Name: settings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.settings (id, "userId", "customSlug", "enableNewNotify", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: sites; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sites (id, title, description, keywords, address, telephone, language, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: teams; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.teams (id, name, job, avatar, content, "createdAt", "updatedAt") FROM stdin;
3	team1	team1 job	1630738465734_Group_91-1.png	team1 content	2021-09-04 10:54:25.765+04	2021-09-04 10:54:25.765+04
4	team2	team2 job	1630738755709_Group_72.png	team2 content	2021-09-04 10:59:15.745+04	2021-09-04 10:59:15.745+04
\.


--
-- Data for Name: tokens; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tokens (id, "userId", "propertyId", "purchasePrice", quantity, "createdAt", "updatedAt", "tokenAddress", "salePrice", "tokenSymbol") FROM stdin;
13	1	12	4.5	10000	2021-09-04 04:45:04.724+04	2021-09-04 04:45:04.724+04	0x711169eba29367425a45a2b6ee4b7c345befc0ad	5	MTT
17	1	13	140	1000	2021-09-09 18:21:46.921+04	2021-09-09 18:21:46.921+04	0x6570865f7496336D9B68bEAeD40a48be4F31169b	150	DINELI_TK1
\.


--
-- Data for Name: user_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_roles ("createdAt", "updatedAt", "roleId", "userId") FROM stdin;
2021-07-29 15:59:07.202+04	2021-07-29 15:59:07.202+04	1	3
2021-07-30 20:40:34.49+04	2021-07-30 20:40:34.49+04	1	4
2021-07-30 22:29:01.591+04	2021-07-30 22:29:01.591+04	1	5
2021-08-02 11:03:47.581+04	2021-08-02 11:03:47.581+04	1	9
2021-08-25 12:39:18.48+04	2021-08-25 12:39:18.48+04	1	11
2021-08-25 12:40:14.388+04	2021-08-25 12:40:14.388+04	1	12
2021-08-27 08:43:07.978+04	2021-08-27 08:43:07.978+04	1	14
2021-08-27 08:44:03.555+04	2021-08-27 08:44:03.555+04	1	15
2021-07-23 20:23:41.92+04	2021-07-23 20:23:41.92+04	3	1
2021-09-04 06:07:21.559+04	2021-09-04 06:07:21.559+04	1	29
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, firstname, lastname, phone, citizen, username, email, password, "isActive", "verificationString", "createdAt", "updatedAt", "walletAddress") FROM stdin;
12	a	a	11111	0	a	devok121212@gmail.com	$2a$08$/8nw.vlvmryF9hkIpd92uOAUvfPfvmpLg1uluvJ1h5ZeHYXRpnHnG	t	l0npoolc16r8562bnazv	2021-08-25 12:40:14.364+04	2021-08-25 12:42:41.934+04	\N
3	Sohail	Bajwa	03006903589	0	Bajwa	sohail_bajwa@yahoo.com	$2a$08$NVhJc4QpYPHfu7Q6IINbKuFAAEY9WPnL8RImJX/5xbcYjNIRX.1y6	\N	$2a$08$xeYbF7GzZQY7doU.6YMPV.bq3KQEgz9cJBrz9T6djD.CdF2aCmqry	2021-07-29 15:59:07.149+04	2021-07-29 15:59:07.149+04	\N
14	aaa	aaa	12487754455	1	aaaa	marina.ivanova.20210@gmail.com	$2a$08$WofymQ5oNB043hSHK2V6Z.C0sKSnFXIrFjxjPGApMgLmgqbfnjkXK	\N	orrfazguxhg7ibruzy5uc	2021-08-27 08:43:07.766+04	2021-08-27 08:43:07.766+04	\N
15	aaa	aaa	12487754455	1	aaee	vassul.man@gmail.com	$2a$08$2G74vBZ.jUEjXNG0XTi7ieXgvRtXydlC8VbO0R3BC6pLCKzcDCnXK	t	zsmkkj579obpkfue9hjaq8	2021-08-27 08:44:03.536+04	2021-08-27 08:44:33.99+04	\N
5	Dineli	Dineli	+1302020495	0	Dineli	dineli.comm@gmail.com	$2a$08$RxAXVuMfi72Dk0FzR3RtFO.oBgyOM9O4GbdaLOnsCwrd6am91tTxW	\N	$2a$08$j7hxFEfoFYi4qU/LVPA4vOkoMA2o3nUxaqZgTqRV0SEaoUhXQXfNi	2021-07-30 22:29:01.536+04	2021-07-30 22:29:01.536+04	\N
9	Geoffry	Fernandez	03006903588	0	Geoff	parrotchannel1@gmail.com	$2a$08$N9mUj6/sOMQERHdh0hEgdugAGbo9uEDBbQezMFJiv.4hEFOb9EBAG	t	gl94rj10l9f77fdn9uea4m	2021-08-02 11:03:47.32+04	2021-08-02 11:04:01.815+04	\N
4	Michael	Joe	+1234505678	0	Michael	sohail_bajwa@hotmail.com	$2a$08$Bp9kMNepy0lOjN4n39WG9uR6hzXXBMXryK3ueJ2B3UK35.7rqKZ0.	\N	$2a$08$zLpIie8HD73cJp5MQ8pC/OQQa/EQ7jpQlu25uW1tc23ICPj01hUFO	2021-07-30 20:40:34.385+04	2021-07-30 20:40:34.385+04	\N
11	a	a	11111	0	aa	a@a.com	$2a$08$qa8AXgGMX9xk87Yyk9Fz/.KLW1InqkYsGREm1faxsh6qJdlMM3mPe	\N	91lsq9jistulr553koxp1	2021-08-25 12:39:18.431+04	2021-08-25 12:39:18.431+04	\N
29	Alina	Alk	123456789	0	user	wdev555@gmail.com	$2a$08$0mtTY5H5wkdYEg6UKx6ft.W3i0Wejuy7kZxnK2t63jsFgvtvFaYgG	t	$2a$08$mHF/fcvG/KTCuvBAyD2O0.D8DabpvRkr2ANwS7N6S3069r030LEK.	2021-09-04 06:07:21.492+04	2021-09-04 06:07:21.492+04	0x2bA919505Abe61170dd2c67BC5c6BDCb62ad54D7
1	Sohail	Bajwa	+923006903589	0	Facilitator	libra9012@gmail.com	$2a$08$0mtTY5H5wkdYEg6UKx6ft.W3i0Wejuy7kZxnK2t63jsFgvtvFaYgG	t	$2a$08$mHF/fcvG/KTCuvBAyD2O0.D8DabpvRkr2ANwS7N6S3069r030LEK.	2021-07-23 20:23:41.875+04	2021-09-04 11:24:04.24+04	0x2bA919505Abe61170dd2c67BC5c6BDCb62ad54D7
\.


--
-- Data for Name: verifies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.verifies (id, "userId", content, "isVerified", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: visits; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.visits (id, "userId", url, "refferUrl", "isConverted", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: affUrls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."affUrls_id_seq"', 1, false);


--
-- Name: blogs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.blogs_id_seq', 14, true);


--
-- Name: carts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.carts_id_seq', 1, false);


--
-- Name: comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.comments_id_seq', 1, false);


--
-- Name: faqs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.faqs_id_seq', 5, true);


--
-- Name: lifeCustomers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."lifeCustomers_id_seq"', 1, false);


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_id_seq', 7, true);


--
-- Name: paymentTypes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."paymentTypes_id_seq"', 1, false);


--
-- Name: payouts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.payouts_id_seq', 1, false);


--
-- Name: properties_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.properties_id_seq', 13, true);


--
-- Name: referrals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.referrals_id_seq', 1, false);


--
-- Name: settings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.settings_id_seq', 1, false);


--
-- Name: sites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sites_id_seq', 1, false);


--
-- Name: teams_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.teams_id_seq', 4, true);


--
-- Name: tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tokens_id_seq', 19, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 31, true);


--
-- Name: verifies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.verifies_id_seq', 1, false);


--
-- Name: visits_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.visits_id_seq', 1, false);


--
-- Name: affUrls affUrls_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."affUrls"
    ADD CONSTRAINT "affUrls_pkey" PRIMARY KEY (id);


--
-- Name: blogs blogs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blogs
    ADD CONSTRAINT blogs_pkey PRIMARY KEY (id);


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY (id);


--
-- Name: comments comments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);


--
-- Name: faqs faqs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.faqs
    ADD CONSTRAINT faqs_pkey PRIMARY KEY (id);


--
-- Name: lifeCustomers lifeCustomers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."lifeCustomers"
    ADD CONSTRAINT "lifeCustomers_pkey" PRIMARY KEY (id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: paymentTypes paymentTypes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."paymentTypes"
    ADD CONSTRAINT "paymentTypes_pkey" PRIMARY KEY (id);


--
-- Name: payouts payouts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payouts
    ADD CONSTRAINT payouts_pkey PRIMARY KEY (id);


--
-- Name: properties properties_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.properties
    ADD CONSTRAINT properties_pkey PRIMARY KEY (id);


--
-- Name: referrals referrals_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.referrals
    ADD CONSTRAINT referrals_pkey PRIMARY KEY (id);


--
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- Name: settings settings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.settings
    ADD CONSTRAINT settings_pkey PRIMARY KEY (id);


--
-- Name: sites sites_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sites
    ADD CONSTRAINT sites_pkey PRIMARY KEY (id);


--
-- Name: teams teams_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_pkey PRIMARY KEY (id);


--
-- Name: tokens tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_pkey PRIMARY KEY (id);


--
-- Name: user_roles user_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY ("roleId", "userId");


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: verifies verifies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.verifies
    ADD CONSTRAINT verifies_pkey PRIMARY KEY (id);


--
-- Name: visits visits_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.visits
    ADD CONSTRAINT visits_pkey PRIMARY KEY (id);


--
-- Name: blogs blogs_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blogs
    ADD CONSTRAINT "blogs_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: carts carts_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT "carts_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: comments comments_blogId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT "comments_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES public.blogs(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: orders orders_paymentTypeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "orders_paymentTypeId_fkey" FOREIGN KEY ("paymentTypeId") REFERENCES public."paymentTypes"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: orders orders_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_roles user_roles_roleId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT "user_roles_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES public.roles(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_roles user_roles_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT "user_roles_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: verifies verifies_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.verifies
    ADD CONSTRAINT "verifies_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

