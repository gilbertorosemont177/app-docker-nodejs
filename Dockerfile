#MYSQL
FROM mysql:8
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=USERSTEST
COPY ./sqlscript/ /docker-entrypoint-initdb.d
EXPOSE 3306
CMD ["--default-authentication-plugin=mysql_native_password"]

