const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer className='bg-black text-white flex items-center justify-end py-2 px-4'>
      <small>MovieList App &copy; {date}</small>
    </footer>
  )
}

export default Footer
