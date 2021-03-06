/**

This test is meant to work like this:

It read comment-example.md and ensure regenerating it gives the same output.
The goal is to force user to regenerate comment-example.md and ensure it looks correct before commiting it.

-> This is snapshot testing to force a human review when comment is modified.

*/

import { readFile, resolveUrl } from "@jsenv/util"
import { assert } from "@jsenv/assert"

const commentExampleFileUrl = resolveUrl("../../docs/comment-example.md", import.meta.url)
const readCommentExampleFile = async () => {
  const fileContent = await readFile(commentExampleFileUrl)
  return fileContent
}

// disable on windows because it would fails due to line endings (CRLF)
if (process.platform !== "win32") {
  const expected = await readCommentExampleFile()
  await import("../../docs/generate-comment-example.js")
  const actual = await readCommentExampleFile()
  assert({ actual, expected })
}
