/* eslint-disable react/no-children-prop */
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type RoomDescriptionSectionProps = {
  description: string
}

const RoomDescriptionSection = ({
  description,
}: RoomDescriptionSectionProps) => {
  const isOver300Chars = description.length > 300

  return (
    <section className="pb-8 md:pb-12 pt-8 border-b border-b-border-light-gray">
      <ReactMarkdown
        components={{
          p: ({ node, ...props }) => (
            <p className="text-base leading-6" {...props} />
          ),
        }}
        children={
          isOver300Chars ? `${description.slice(0, 300)}...` : description
        }
        remarkPlugins={[remarkGfm]}
      />

      {isOver300Chars && (
        <button className="btn btn-link btn-lg pl-0 mt-4">
          <span>Show more</span>
        </button>
      )}
    </section>
  )
}

export default RoomDescriptionSection
