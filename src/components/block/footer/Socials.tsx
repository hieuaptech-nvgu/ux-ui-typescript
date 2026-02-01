import { Facebook, Instagram, Github } from 'lucide-react'

export default function Socials() {
  return (
    <div className='box_socials'>
      <div className='box_socials_item'>
        <Facebook />
      </div>

      <div className='box_socials_item'>
        <Instagram />
      </div>

      <div className='box_socials_item'>
        <Github />
      </div>
    </div>
  )
}
