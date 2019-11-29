  
function link(parent, args, context) {
    console.log("hits")
    return context.prisma.comment({ id: parent.id }).link()
  }
  
  
  module.exports = {
    link
  }