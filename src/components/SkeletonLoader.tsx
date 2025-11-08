// Skeleton loader components for loading states

export function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl p-8 animate-pulse shadow-sm">
      <div className="h-80 bg-gray-200 rounded-xl mb-6"></div>
      <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
      <div className="h-6 bg-gray-200 rounded w-2/3 mb-6"></div>
      <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
        <div className="h-12 bg-gray-200 rounded"></div>
        <div className="h-12 bg-gray-200 rounded"></div>
        <div className="h-12 bg-gray-200 rounded"></div>
      </div>
      <div className="h-12 bg-gray-200 rounded"></div>
    </div>
  )
}

export function SkeletonProductGrid({ count = 3 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {[...Array(count)].map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}

export function SkeletonHero() {
  return (
    <div className="container-custom py-24 animate-pulse">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="h-8 bg-gray-200 rounded w-48"></div>
          <div className="h-20 bg-gray-200 rounded w-full"></div>
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="flex gap-4">
            <div className="h-14 bg-gray-200 rounded w-40"></div>
            <div className="h-14 bg-gray-200 rounded w-40"></div>
          </div>
        </div>
        <div className="h-96 bg-gray-200 rounded-3xl"></div>
      </div>
    </div>
  )
}

export function SkeletonText({ width = 'full' }: { width?: 'full' | '3/4' | '1/2' | '1/3' }) {
  return <div className={`h-4 bg-gray-200 rounded w-${width} animate-pulse`}></div>
}
