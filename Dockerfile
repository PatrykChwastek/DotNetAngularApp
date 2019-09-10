FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.2-sdk-alpine AS builder
WORKDIR /source
COPY . .
RUN dotnet restore
RUN dotnet publish -c Release -r linux-musl-x64 -o /app

RUN mkdir -p /app/ClientApp/dist
ADD /source/ClientApp/dist /app/ClientApp/dist

FROM microsoft/dotnet:2.2-aspnetcore-runtime-alpine
WORKDIR /app
COPY --from=builder /app .
RUN mkdir -p /app/ClientApp/dist
ENTRYPOINT ["./DotNetCoreAngularApp"]