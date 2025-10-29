function BookCard({ book }) {
  // Get book cover image URL
  const getCoverImage = () => {
    if (book.cover_i) {
      return `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    }
    return null
  }

  // Get author name
  const getAuthor = () => {
    if (book.author_name && book.author_name.length > 0) {
      return book.author_name[0]
    }
    return 'Unknown Author'
  }

  // Get first publish year
  const getFirstPublishYear = () => {
    if (book.first_publish_year) {
      return book.first_publish_year
    }
    return 'N/A'
  }

  const coverImage = getCoverImage()
  const author = getAuthor()
  const publishYear = getFirstPublishYear()

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 transform cursor-pointer group">
      {/* Book Cover */}
      {coverImage ? (
        <div className="aspect-[2/3] bg-gray-200 overflow-hidden">
          <img
            src={coverImage}
            alt={book.title || 'Book cover'}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      ) : (
        <div className="aspect-[2/3] bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#8B5CF6" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
          
          <div className="text-center text-gray-400 relative z-10">
            <div className="text-6xl mb-2 transition-transform duration-300 group-hover:scale-110">
              📖
            </div>
            <p className="text-xs font-medium text-gray-500">No Cover Available</p>
          </div>
        </div>
      )}

      {/* Book Info */}
      <div className="p-4 transition-colors duration-300 group-hover:bg-gray-50">
        <h3 className="font-semibold text-gray-800 text-lg mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors duration-300">
          {book.title || 'Untitled'}
        </h3>
        <p className="text-gray-600 text-sm mb-2">
          <span className="font-medium">Author:</span> {author}
        </p>
        <p className="text-gray-600 text-sm">
          <span className="font-medium">Published:</span> {publishYear}
        </p>
      </div>
    </div>
  )
}

export default BookCard

