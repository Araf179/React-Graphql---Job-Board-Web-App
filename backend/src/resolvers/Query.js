async function feed(parent, args, context) {
  const where = args.filter
    ? {
        OR: [
          { description_contains: args.filter },
          { title_contains: args.filter },
        ]
      }
    : {}

  const links = await context.prisma.links({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  })
  const count = await context.prisma
    .linksConnection({
      where,
      skip: args.skip,
    })
    .aggregate()
    .count()
  return {
    links,
    count,
  }
}

async function singleLink(parent, args, context) {
  console.log(args.id +  " " +  args.category)

const links = await context.prisma.link({
  id: args.id
})
    return links
  
}

module.exports = {
  feed,
  singleLink
}