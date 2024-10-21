import Image from 'next/image'

interface ProductImageProps {
  image: string
  name: string
}

export function ProductImage({ image, name }: ProductImageProps) {
  return (
    <div className="md:w-1/2 p-6">
      <div className="relative aspect-square rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      {/* Thumbnail images would go here */}
      <div className="mt-4 flex justify-center space-x-2">
        {[1, 2, 3, 4].map((i) => (
          <button key={i} className="w-28 h-28 border-2 border-gray-200 rounded-md overflow-hidden">
            <Image
              src={image}
              alt={`Thumbnail ${i}`}
              width={112}
              height={112}
              className="object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  )
}