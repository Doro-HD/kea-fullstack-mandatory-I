let autoIncrementValue = 1

function autoIncrement() {
  return autoIncrementValue++  
}

export default [
    {
      id: autoIncrement(),
      topic: "API",
      title: "API route order",
      summary: "OpenAPI has created a specification for how to order one's api routes",
      content: [
        {
          type: 'paragraf',
          text: "this is a test"
        },
        {
          type: 'code',
          text: "function test() {\n\tconst id = 1\n}"
        }
      ]
    },
    {
      id: autoIncrement(),
      title: "test",
      summary: "test",
      content: [
        {
          paragraf: "this is a test"
        },
        {
          code: "const id = 1"
        }
      ]
    },
    {
      id: autoIncrement(),
      title: "test",
      summary: "test",
      content: [
        {
          paragraf: "this is a test"
        },
        {
          code: "const id = 1"
        }
      ]
    },
    {
      id: autoIncrement(),
      title: "test",
      summary: "test",
      content: [
        {
          paragraf: "this is a test"
        },
        {
          code: "const id = 1"
        }
      ]
    },
    {
      id: autoIncrement(),
      title: "test",
      summary: "test",
      content: [
        {
          paragraf: "this is a test"
        },
        {
          code: "const id = 1"
        }
      ]
    },
  ]
