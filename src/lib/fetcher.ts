export default async function Fetcher(
  input: RequestInfo | string,
  init?: RequestInit
) {
  const res = await fetch(input, init)

  return res.json()
}
