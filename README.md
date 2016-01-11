# Pacific Geomatics Website

To test this site locally:

```bash
git clone https://github.com/pacific-geomatics/website.git && cd website
npm install
npm start
firefox localhost:3000
```

Deploy with **Docker**

```bash
sudo docker build -t pacgeo/website .
sudo docker run -d -p 3000:3000 --name website pacgeo/website
```
