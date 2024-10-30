for starting spark-shell for s3:
```shell
cd infra/recipes/docker-compose/oh-s3-spark
id-tool grestin sign
docker compose up -d
```
login to the container:
```shell
docker exec -it local.spark-master /bin/bash
```
and then:
```shell
bin/spark-shell --packages org.apache.iceberg:iceberg-spark-runtime-3.1_2.12:1.2.0,software.amazon.awssdk:bundle:2.20.18,software.amazon.awssdk:url-connection-client:2.20.18   \
--jars openhouse-spark-runtime_2.12-*-all.jar  \
--conf spark.sql.extensions=org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions,com.linkedin.openhouse.spark.extensions.OpenhouseSparkSessionExtensions   \
--conf spark.sql.catalog.openhouse=org.apache.iceberg.spark.SparkCatalog   \
--conf spark.sql.catalog.openhouse.catalog-impl=com.linkedin.openhouse.spark.OpenHouseCatalog     \
--conf spark.sql.catalog.openhouse.io-impl=org.apache.iceberg.aws.s3.S3FileIO   \
--conf spark.sql.catalog.openhouse.s3.endpoint=<BLOB_SERVICE_URL>  \
--conf spark.sql.catalog.openhouse.s3.access-key-id=admin  \
--conf spark.sql.catalog.openhouse.s3.secret-access-key=password  \
--conf spark.sql.catalog.openhouse.s3.path-style-access=true  \
--conf spark.sql.catalog.openhouse.metrics-reporter-impl=com.linkedin.openhouse.javaclient.OpenHouseMetricsReporter    \
--conf spark.sql.catalog.openhouse.uri=http://openhouse-tables:8080   \
--conf spark.sql.catalog.openhouse.auth-token=$(cat /var/config/openhouse.token) \
--conf spark.sql.catalog.openhouse.cluster=LocalS3Cluster  \
--conf spark.sql.catalogImplementation=in-memory
```