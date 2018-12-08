import { prebuild } from "../commands"
import { runCmd } from "../utils"

export const command = "ci-build"
export const desc = "run a fast, clean, webpack production build"

export async function handler() {
  console.log("[CI-BUILD]")
  await prebuild()
  runCmd("sh -c 'npm run-script ci-build'")
}
