export default async function Fetcher(
  input: RequestInfo | string,
  init?: RequestInit
): Promise<any> {
  const res = await fetch(input, init)

  return res.json()
}
