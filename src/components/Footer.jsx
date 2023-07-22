const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer className='flex items-center justify-end my-2 px-4'>
      <small>MovieList App &copy; {date}</small>
    </footer>
  )
}

export default Footer
