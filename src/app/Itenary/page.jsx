import React from 'react'
import Day1 from "./Day1"
import Day2 from "./Day2"
import Day3 from "./Day3"
import HyperText from '../../components/magicui/hyper-text'

export default function page() {
  return (
    <div>
      <HyperText
        className="text-7xl my-24 font-bold text-black dark:text-white"
        text="ITENARY"
      />
      <Day1 />
      <Day2 />
      <Day3 />
    </div>
  )
}
