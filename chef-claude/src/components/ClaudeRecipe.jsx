import Markdown from 'react-markdown'
export default function ClaudeRecipe({recipe}) {
    return (
        <section className='px-14'>
          <h2 className='text-2xl py-4 font-inter font-bold'>Chef Claude Recommends:</h2>

            <Markdown>{recipe}</Markdown>
        </section>
    )
}