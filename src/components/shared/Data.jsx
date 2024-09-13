const stats = [
    { id: 1, name: 'Number of students particpated till now', value: '44k' },
    { id: 2, name: 'Prize Pool', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '4600' },
  ]
  
  export default function Data() {
    return (
      <div className="bg-transparent py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-purple-200">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-purple-400 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  