FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base

# Setup NodeJs
RUN apt-get update && \
    apt-get install -y wget && \
    apt-get install -y gnupg2 && \
    wget -qO- https://deb.nodesource.com/setup_6.x | bash - && \
    apt-get install -y build-essential nodejs
# End setup

WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.2-sdk-alpine AS builder
WORKDIR /source
COPY . .
RUN dotnet restore
RUN dotnet publish -c Release -r linux-musl-x64 -o /app

FROM microsoft/dotnet:2.2-aspnetcore-runtime-alpine
WORKDIR /app
COPY --from=builder /app .
ENTRYPOINT ["./DotNetCoreAngularApp"]