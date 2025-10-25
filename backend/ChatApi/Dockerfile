# build için
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

# Proje dosyalarını kopyala
COPY . .

# Publish 
RUN dotnet publish -c Release -o /app/publish

# 2. Runtime 
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /app/publish .

# API port
EXPOSE 5227

# Uygulamayı başlat
ENTRYPOINT ["dotnet", "ChatApi.dll"]
