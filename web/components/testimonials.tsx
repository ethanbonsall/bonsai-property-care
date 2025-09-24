import { Star } from "lucide-react";

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      author: "John",
      content:
        "They sealed our driveway quickly and it looks brand new. No more cracks showing!",
    },
    {
      id: 2,
      author: "Paula",
      content:
        "The team cleaned all our windows inside and out — the house feels so much brighter now.",
    },
    {
      id: 3,
      author: "Sam",
      content:
        "Excellent landscaping work! They trimmed the hedges, mulched the beds, and everything looks neat.",
    },
    {
      id: 4,
      author: "Rachel",
      content:
        "Our lawn was patchy before, but after their care it’s lush and green. Super impressed.",
    },
    {
      id: 5,
      author: "Megan",
      content:
        "Very professional crew. They showed up on time and sealed the driveway perfectly.",
    },
    {
      id: 1,
      author: "John",
      content:
        "They sealed our driveway quickly and it looks brand new. No more cracks showing!",
    },
    {
      id: 2,
      author: "Paula",
      content:
        "The team cleaned all our windows inside and out — the house feels so much brighter now.",
    },
    {
      id: 3,
      author: "Sam",
      content:
        "Excellent landscaping work! They trimmed the hedges, mulched the beds, and everything looks neat.",
    },
    {
      id: 4,
      author: "Rachel",
      content:
        "Our lawn was patchy before, but after their care it’s lush and green. Super impressed.",
    },
    {
      id: 5,
      author: "Megan",
      content:
        "Very professional crew. They showed up on time and sealed the driveway perfectly.",
    },
  ];

  type Review = {
    id: number;
    author: string;
    content: string;
  };

  function ReviewCard({ review }: { review: Review }) {
    return (
      <div className="bg-background text-text m-4 p-4 rounded-[24px] shadow-md w-[300px] h-[300px] 2xl:w-[500px] 2xl:h-[500px] flex flex-col justify-between 2xl:justify-center gap-y-8">
        <div className="flex flex-row justify-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="text-yellow-400 fill-current w-16 h-auto"
            />
          ))}
        </div>
        <div>
          <p className="text-center text-2xl 2xl:text-5xl italic text-wrap">
            &quot;{review.content}&quot;
          </p>
          <p className="text-center mt-2 text-lg 2xl:text-2xl font-semibold">
            - {review.author}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-gradient-to-b from-secondary to-accent text-text min-h-screen w-full items-center justify-evenly lg:justify-center text-center py-[4%]">
      <div className="px-[1%]">
        <p className="text-6xl mb-[3%] font-bold">Testimonials</p>
        <p className="text-3xl mb-[3%]">
          See why our customers love our work and keep coming back!
        </p>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
