import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Home({ searchParams }) {
  const genre = searchParams?.genre || "fetchTrending";

  try {
    // // Optional delay of 2 seconds
    // await delay(2000);

    const res = await fetch(
      `https://api.themoviedb.org/3${
        genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
      }?api_key=${API_KEY}&language=en-US&page=1`,
      { next: { revalidate: 10000 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    const results = data.results;

    return (
      <div>
        <Results results={results} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data</div>;
  }
}
