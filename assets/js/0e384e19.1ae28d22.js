"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9671],{7876:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=t(5893),a=t(1151);const s={sidebar_position:1},o="Overview",r={id:"intro",title:"Overview",description:"OpenHouse is an open-source control plane designed for efficient management of tables within open data lakehouse",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",next:{title:"Getting Started",permalink:"/docs/getting_started"}},l={},c=[{value:"Control Plane for Tables",id:"control-plane-for-tables",level:2},{value:"Catalog Service",id:"catalog-service",level:3},{value:"Data Services",id:"data-services",level:3},{value:"Jobs Scheduler",id:"jobs-scheduler",level:4},{value:"Jobs Service",id:"jobs-service",level:4},{value:"House Table Service",id:"house-table-service",level:3},{value:"Engine Integration",id:"engine-integration",level:2},{value:"Deployed System Architecture",id:"deployed-system-architecture",level:2},{value:"Pluggable Architecture",id:"pluggable-architecture",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["OpenHouse is an open-source control plane designed for efficient management of tables within open data lakehouse\ndeployments. The control plane comprises a ",(0,i.jsx)(n.strong,{children:"declarative catalog"})," and a suite of ",(0,i.jsx)(n.strong,{children:"data services"}),". Users can\nseamlessly define Tables, their schemas, and associated metadata declaratively within the catalog.\nOpenHouse reconciles the observed state of Tables with their desired state by orchestrating various\ndata services."]}),"\n",(0,i.jsx)(n.h2,{id:"control-plane-for-tables",children:"Control Plane for Tables"}),"\n",(0,i.jsx)(n.p,{children:"Following figure shows how OpenHouse control plane fits into a broader open source data lakehouse deployment."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"High Level Overview",src:t(1369).Z+"",width:"510",height:"660"})}),"\n",(0,i.jsx)(n.h3,{id:"catalog-service",children:"Catalog Service"}),"\n",(0,i.jsx)(n.p,{children:"The core of OpenHouse's control plane is a RESTful Table Service that provides secure and scalable table provisioning\nand declarative metadata management. The service exposes Tables as the RESTful resource which includes following metadata:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Identifiers (Cluster ID, Database ID, Table ID, Table URI, Table UUID)"}),"\n",(0,i.jsx)(n.li,{children:"Schema (Column Name, Column Type, Column Comment)"}),"\n",(0,i.jsx)(n.li,{children:"Time Partitioning and String Clustering (Column Name)"}),"\n",(0,i.jsx)(n.li,{children:"Table Policies (Retention, Sharing, Tags)"}),"\n",(0,i.jsx)(n.li,{children:"Table Type (Primary, Replica)"}),"\n",(0,i.jsx)(n.li,{children:"Other Metadata (Creator Principal, Created Time, Last Modified Time, and Version)"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"data-services",children:"Data Services"}),"\n",(0,i.jsx)(n.p,{children:"Jobs Scheduler and Jobs Service are the two components that are responsible for orchestrating the execution of data\nservices. Data services are designed to be modular and can be extended to support various data management operations."}),"\n",(0,i.jsx)(n.h4,{id:"jobs-scheduler",children:"Jobs Scheduler"}),"\n",(0,i.jsxs)(n.p,{children:["Jobs Scheduler is responsible for iterating through all the tables, and for each table, it triggers a set of jobs\n(i.e. data services) to keep the table in a user-configured, system-defined, and compliant state. Job scheduler can be\nrun as a cronjob per job type. It integrates with the ",(0,i.jsx)(n.a,{href:"#catalog-service",children:"Catalog Service"})," to get the list of tables and\ncorresponding metadata. It triggers the corresponding job by calling the ",(0,i.jsx)(n.a,{href:"#jobs-service",children:"Jobs Service"})," endpoint. For\nexample, if a table has a retention policy of 30 days, Jobs Scheduler will trigger the Job Service with the table name\nand retention period."]}),"\n",(0,i.jsx)(n.p,{children:"Job types supported today are described below:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Retention","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Users can establish retention policies on time-partitioned tables. Retention job automatically identifies and delete\npartitions older than the specified threshold."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Iceberg Snapshot Expiration","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Iceberg tables can have a retention policy on the snapshots. This job type is responsible for deleting the snapshots\nolder than the specified threshold."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Iceberg Orphan File Deletion","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Iceberg tables can have orphan files that are not referenced by any snapshot. This job type is responsible for\nidentifying and staging them for deleting in a trash directory."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Staged File Deletion","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"All the staged files that are marked for deletion are deleted by staged file deletion job."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Data Compaction","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This job type is responsible for compacting the small files in the table to improve the query performance and\noptimally use the assigned file quotas."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"jobs-service",children:"Jobs Service"}),"\n",(0,i.jsxs)(n.p,{children:["All the job types discussed in ",(0,i.jsx)(n.a,{href:"#jobs-scheduler",children:"Jobs Scheduler"})," are implemented as Spark applications, and it is the\nJobs Service that is responsible for submitting these jobs to the Spark cluster. Jobs Services is a\nRESTful service that provides an endpoint for the scheduler to trigger a job. Jobs Service is modularized in a way that\nit can be extended to support various spark job submission APIs. One such implementation based on Apache Livy API is\nshipped with the repository, and is used in docker compose setup."]}),"\n",(0,i.jsx)(n.p,{children:"Jobs Service also tracks all the job metadata, including the status of the job, the time it was triggered, table name,\ntable metadata, error logs, and job type. This metadata is used for tracking job completions, observability and\nmonitoring purposes at table granularity."}),"\n",(0,i.jsx)(n.h3,{id:"house-table-service",children:"House Table Service"}),"\n",(0,i.jsxs)(n.p,{children:["House Table Service is an internal RESTful service used by ",(0,i.jsx)(n.a,{href:"#catalog-service",children:"Catalog Service"})," and ",(0,i.jsx)(n.a,{href:"#data-services",children:"Data Services"}),".\nThe backend storage for House Table Service is pluggable, and can use a Database supported by ",(0,i.jsx)(n.a,{href:"https://spring.io/projects/spring-data",children:"Spring Data JPA"}),".\nThe default implementation uses H2 in-memory, but it can be extended to use other databases like MySQL, Postgres, etc."]}),"\n",(0,i.jsx)(n.h2,{id:"engine-integration",children:"Engine Integration"}),"\n",(0,i.jsxs)(n.p,{children:["OpenHouse is designed to integrate with various engines like Spark, Trino, and Flink at their Catalog layer. For Iceberg\ntables, ",(0,i.jsx)(n.a,{href:"https://github.com/linkedin/openhouse/blob/main/integrations/java/openhouse-java-runtime/src/main/java/com/linkedin/openhouse/javaclient/OpenHouseCatalog.java",children:"OpenHouseCatalog"}),"\nimplementation is provided to integrate with Spark. Given OpenHouse supports Table Sharing and Policy Management through\nSpark SQL syntax, SQL extensions are created, and implemented in the OpenHouseCatalog."]}),"\n",(0,i.jsx)(n.p,{children:"The integration on the engine side is anticipated to utilize a lightweight REST client for communication with the\nCatalog Service."}),"\n",(0,i.jsx)(n.p,{children:"Trino and Flink engines follow a similar pattern of integration with OpenHouse and are work in progress."}),"\n",(0,i.jsx)(n.h2,{id:"deployed-system-architecture",children:"Deployed System Architecture"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Example Deployed System Architecture",src:t(9009).Z+"",width:"7938",height:"4532"})}),"\n",(0,i.jsx)(n.p,{children:"The figure above shows system components of OpenHouse deployed at LinkedIn. Each component is numbered and its purpose\nis as follows:"}),"\n",(0,i.jsx)(n.p,{children:"[1] Catalog (/Table) service: This is a RESTful web service that exposes tables REST resources. This service is deployed\non a Kubernetes cluster with a fronting Envoy Network Proxy."}),"\n",(0,i.jsx)(n.p,{children:"[2] REST clients: A variety of applications use REST clients to call into table service (#1). Clients include but are\nnot limited to compliance apps, replication apps, data discovery apps like Datahub and IaC, Terraform providers, and\ndata quality checkers. Some of the apps that work on all the tables in OpenHouse are assigned higher privileges."}),"\n",(0,i.jsx)(n.p,{children:"[3] Metastore Catalog: Spark,Trino, andFlink engines are a special flavor of REST clients. An OpenHouse specific\nmetastore catalog implementation allows engines to integrate with OpenHouse tables."}),"\n",(0,i.jsx)(n.p,{children:"[4] House Database (/Table) service: This is an internal service to store table service and data service metadata. This\nservice exposes a key-value interface that is designed to use a NoSQL DB for scale and cost optimization. However the\ndeployed system is currently backed by a MySQL instance, for ease of development and deployment."}),"\n",(0,i.jsx)(n.p,{children:"[5] Managed namespace: This is a managed HDFS namespace where tables are persisted in Iceberg table format. Table\nservice is responsible for setting up the table directory structure with appropriate FileSystem permissioning.\nOpenHouse has a novel HDFS permissioning scheme that makes it possible for any ETL flow to publish directly to Iceberg tables and securely into a managed HDFS namespace."}),"\n",(0,i.jsx)(n.p,{children:"[6] Data services: This is a set of data services that reconciles the user / system declared configuration with the\nsystem observed configuration. This includes use cases such as retention, restatement, and Iceberg-specific maintenance.\nEach maintenance activity is scheduled as a Spark job per table. A Kubernetes cronjob is run periodically on a schedule to trigger a maintenance activity. All the bookkeeping of jobs is done in House Database Service using a jobs metadata table for ease of debugging and monitoring."}),"\n",(0,i.jsx)(n.h2,{id:"pluggable-architecture",children:"Pluggable Architecture"}),"\n",(0,i.jsx)(n.p,{children:"Components of OpenHouse are designed to be pluggable, so that OpenHouse can be deployed in diverse private and public\ncloud environments. This pluggability is available for the following components:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Storage: OpenHouse supports a Hadoop Filesystem interface, compatible with HDFS and blob stores that support it. Storage\ninterfaces can be augmented to plugin with native blob store APIs."}),"\n",(0,i.jsx)(n.li,{children:"Authentication: OpenHouse supports token-based authentication. Given that token validation varies depending on the\nenvironment, custom implementations can be built according to organizational needs."}),"\n",(0,i.jsx)(n.li,{children:"Authorization: OpenHouse Table Sharing APIs can be extended to suit organizational requirements, covering both metadata\nand data authorization. While we expect implementations to delegate data ACLs to the underlying storage (e.g., POSIX\npermissions for HDFS), for metadata role-based access control, we recommend the use of OPA."}),"\n",(0,i.jsx)(n.li,{children:"Database: OpenHouse utilizes a MySQL database to store metadata pointers for Iceberg table metadata on storage. Choice\nof DB is pluggable, using Spring Data JPA framework, offers flexibility for integration with various database systems."}),"\n",(0,i.jsx)(n.li,{children:"Job Submission: OpenHouse code ships with Apache Livy API for submission of Spark jobs. For custom managed spark services,\njobs services can be extended to trigger spark applications."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["OpenHouse ",(0,i.jsx)(n.a,{href:"https://github.com/linkedin/openhouse/tree/main/cluster/configs/src/main/java/com/linkedin/openhouse/cluster/configs",children:"Cluster Configuration Spec"}),"\nis the place where all the configurations are defined for a particular cluster setup."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1369:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/openhouse-controlplane-91ace254c8643ca21b4dae37692b4299.jpeg"},9009:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/openhouse-deployed-architecture-1bcd512d5ecde3919f2bcc5bdd0e93dd.jpeg"},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var i=t(7294);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);