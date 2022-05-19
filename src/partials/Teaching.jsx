import React from 'react'

const Teaching = () => {
  return (
    <div id='teaching' className='min-h-screen flex flex-col justify-center items-center'>
      <h1 className='text-2xl md:text-4xl font-bold text-left mb-4 w-full'>Teaching</h1>
      <p>
        As an international student in Canada, being a Teaching Assistant is both a means of making
        a living and a pedagogical training trajectory for professional development in academia.
        However, teaching is a totally new skill that is not taught and even though we all know so
        well how to learn, teaching is still a mystery and needs a lot of decolonization.
        Particularly, teaching and researching as a non-native English speaker is a path with both
        challenges and rewards. And there seems to be more challenges in the early stage (especially
        entering a new country and entering a new role at the same time). Here I share the resources
        I have collected along the way as a Teaching Assistant Consultant at University of Victoria
        on issues related to working as a TA, such as:
        <ol className='list-decimal text-left ml-8 mb-8'>
          <li>
            How to work as an international TA (specifically for TAs who have English as Additional
            Language and English is the primary teaching and working language in the institution)?{' '}
          </li>
          <li>How to take care of yourself (Mental health and well-being)</li>
          <li>What is teaching and learning?</li>
          <li> Why and how to build an inclusive and accessible classroom?</li>
        </ol>
      </p>
    </div>
  )
}

export default Teaching