import * as cheerio from 'cheerio';

async function scrapeWebsite(url: string) {
  const html = await fetch(url).then((res) => res.text());
  const $ = cheerio.load(html);

  // I want the title, paragraphs, and code blocks in a div with the class "CodeBlock" only (not the ones in the sidebar which is using Tailwind and has the 'sticky' class) the div that all the content i want is in a div with the class name 'w-full overflow-x-hidden'

  //   const title = $('h1').text();
  //   const paragraphs = $('p')
  //     .map((_, el) => $(el).text())
  //     .get();
  //   const codeBlocks = $('.CodeBlock')
  //     .map((_, el) => $(el).text())
  //     .get();

  const title = $('.w-full.overflow-x-hidden h1').text();
  const paragraphs = $('.w-full.overflow-x-hidden p')
    .map((_, el) => $(el).text())
    .get();
  const codeBlocks = $('.w-full.overflow-x-hidden .CodeBlock')
    .map((_, el) => $(el).text())
    .get();

  return {
    title,
    paragraphs,
    codeBlocks,
  };
}

console.log(await scrapeWebsite('https://bun.sh/docs'));
