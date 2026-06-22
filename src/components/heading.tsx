
const heading = ({ text }: { text: string }) => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3 text-(--color-text-white)">
        {text}
      </h2>
    </div>
  )
}

export default heading
