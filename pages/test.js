import Head from 'next/head'

export default function Test({todos}){
    console.log(todos)
    return(
        <div className="conteiner">
        <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <section>
              <h1>Hello next</h1>
          </section>
        </main>
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch("https://web3-news.online/wp-json/wp/v2/posts");
    const todos = await res.json();
  
    return {
      props: {
        todos,
      },
    };
  };