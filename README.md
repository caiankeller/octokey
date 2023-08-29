# OCTOKEY

[Prévia ao Vivo](https://octokeytest.vercel.app/)

<img src=".repo/preview.png" width="200">

## Como Executar o Projeto

Clone o repositório:
```
   git clone https://github.com/caiankeller/octokey caiankeller@octokey
```

Navegue para o diretório do projeto:
```
   cd caiankeller@octokey
```

Instale as dependências:
```
   npm i
```

Execute o projeto:
```
   npm run dev
```
> É necessário obter uma chave de API, mais informações em .env.example. A API utilizada pode ser encontrada em https://www.weatherapi.com/docs/

### Outros Comandos Úteis
```
   npm run format
   npm run lint
   npm run build
```

## Dificuldades Enfrentadas
Nenhuma, na verdade. Apenas as imagens dinâmicas baseadas nas condições climáticas deram um pouco de trabalho.

## Bibliotecas e Dependências Escolhidas
Não precisei usar muitas dependências. Apenas o Wouter, uma alternativa maravilhosa para o React Router devido à sua simplicidade (e por não ter atualizações que quebram tudo a cada ano). Outro destaque é o tailwind-mask-image, um plugin incrível para o Tailwind CSS que me auxiliou a criar o efeito de desfoque na página do clima.

## Visão em 5 Anos
Apesar de já possuir habilidades de programação sólidas, meu foco para os próximos 5 anos é expandir ainda mais esse conhecimento. Pretendo aprofundar meu domínio nas tecnologias com as quais estou familiarizado e também aquelas que desejo aprender. Desejo me tornar um programador ainda mais competente, desempenhando um papel fundamental na equipe em que estiver inserido. Além disso, tenho planos de colocar em prática meus outros projetos pessoais.

## Tchammmm ✨
Você pode me dizer que é um Tchammm ou não, mas eu realmente queria fazer com que o papel de parede relacionado ao clima fosse baseado nas condições atmosféricas. Embora possa parecer algo básico, isso envolveu scripts em Node.js, o download de imagens e outros processos para alcançar o resultado desejado.

Uma pequena demostração do que eu quero dizer com isso

```javascript
async function fetchWeatherImages(query) {
  const apiUrl = `https://api.unsplash.com/search/photos/?query=${encodeURIComponent(query)}&client_id=${unsplashApiKey}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data.results[0]?.urls?.regular || null;
}

function generateFilename(url) {
  const hash = crypto.createHash('sha256').update(url).digest('hex');
  return `${hash}.jpg`;
}

async function downloadAndSaveImage(url, filename) {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();  
  fs.writeFileSync(filename, Buffer.from(buffer));  
}

async function enhanceDataWithImagesAndSave() {
  const dataWithImages = await Promise.all(data.map(async item => {
    const randomDelay = Math.floor(Math.random() * 5000);
    await new Promise(resolve => setTimeout(resolve, randomDelay));

    const dayBackgroundUrl = await fetchWeatherImages(item.day);
    const nightBackgroundUrl = await fetchWeatherImages(item.night);

    const dayFilename = generateFilename(dayBackgroundUrl);
    const nightFilename = generateFilename(nightBackgroundUrl);

    await downloadAndSaveImage(dayBackgroundUrl, dayFilename);
    await downloadAndSaveImage(nightBackgroundUrl, nightFilename);

    return {
      code: item.code,
      day: { condition: item.day, background: dayFilename },
      night: { condition: item.night, background: nightFilename }
    };
  }));
}
async function fetchWeatherImages(query) {
  const apiUrl = `https://api.unsplash.com/search/photos/?query=${encodeURIComponent(query)}&client_id=${unsplashApiKey}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data.results[0]?.urls?.regular || null;
}

function generateFilename(url) {
  const hash = crypto.createHash('sha256').update(url).digest('hex');
  return `${hash}.jpg`;
}

async function downloadAndSaveImage(url, filename) {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();  
  fs.writeFileSync(filename, Buffer.from(buffer));  
}

async function enhanceDataWithImagesAndSave() {
  const dataWithImages = await Promise.all(data.map(async item => {
    const randomDelay = Math.floor(Math.random() * 5000);
    await new Promise(resolve => setTimeout(resolve, randomDelay));

    const dayBackgroundUrl = await fetchWeatherImages(item.day);
    const nightBackgroundUrl = await fetchWeatherImages(item.night);

    const dayFilename = generateFilename(dayBackgroundUrl);
    const nightFilename = generateFilename(nightBackgroundUrl);

    await downloadAndSaveImage(dayBackgroundUrl, dayFilename);
    await downloadAndSaveImage(nightBackgroundUrl, nightFilename);

    return {
      code: item.code,
      day: { condition: item.day, background: dayFilename },
      night: { condition: item.night, background: nightFilename }
    };
  }));
  fs.writeFileSync("backgrounds.ts", JSON.stringify(dataWithImages, null, 2))
}
```

Eu provavelmente escrevi mais código nisso do que no projeto em sim 😅. Tem até um macetinho para não cair na malha fina da API da unsplash 🤫.