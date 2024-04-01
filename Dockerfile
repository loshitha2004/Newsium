From tomcat:8.0-alpine
COPY target/my-app-1.jar /usr/local/tomcat/webapps

EXPOSE 8081
CMD ["catalina.sh","run"]
