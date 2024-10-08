"use client"

export function ErrorInput() {
  const testFn = () => {
    console.log("test");

     throw new Error("Is this captured by Sentry")
  }

  return (
    <input type="button" onClick={testFn} value="ERROR"  />
  )
}