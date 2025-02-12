import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: "2024-09-26T14:30:00Z",
      views: 1200,
      author: {
        _id: "user123",
        name: "John Doe",
        image:
          "https://images.freeimages.com/image/thumbs/374/instabutton-png-design-5690390.png",
      },
      title: "Revolutionizing AI: The Future of Automation",
      category: "Technology",
      _id: "post001",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCggA_NWsxjzSNW_QP1fJX1I5c9CGXAJE3g&s",
      description:
        "Explore how AI is transforming industries and what the future holds for automation.",
    },
    {
      _createdAt: "2024-09-25T10:15:00Z",
      views: 850,
      author: {
        _id: "user456",
        name: "Jane Smith",
        image:
          "https://images.freeimages.com/image/thumbs/374/instabutton-png-design-5690390.png",
      },
      title: "Sustainable Startups: Green Tech Innovations",
      category: "Environment",
      _id: "post002",
      image:
        "https://plus.unsplash.com/premium_photo-1673688152102-b24caa6e8725?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlZW4lMjB0ZWNofGVufDB8fDB8fHww",
      description:
        "Discover the latest green tech innovations that are making a difference in the world.",
    },
    {
      _createdAt: "2024-09-24T08:45:00Z",
      views: 500,
      author: {
        _id: "user789",
        name: "Michael Lee",
        image:
          "https://images.freeimages.com/image/thumbs/374/instabutton-png-design-5690390.png",
      },
      title: "Fintech Disruptors: The New Era of Digital Banking",
      category: "Finance",
      _id: "post003",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr4Z6SH7fpEaaHHxx8T_pXtLzl3OdMUFzcgw&s",
      description:
        "An in-depth look at how fintech startups are reshaping the financial landscape.",
    },
  ];

  return (
    <>
      <section className="pink_container   ">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: any) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
