interface YoutubeEmbedProps {
  embedId: string;
  title?: string;
}

const YoutubeEmbed = ({
  embedId,
  title = "YouTube video player",
}: YoutubeEmbedProps) => (
  <div className="relative w-full pt-[56.25%]">
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src={`https://www.youtube.com/embed/${embedId}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      loading="lazy"
    />
  </div>
);

export default YoutubeEmbed;
