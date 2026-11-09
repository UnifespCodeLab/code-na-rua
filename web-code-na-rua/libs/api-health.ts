const SIMULATED_API_DELAY_MS = 3_000;

export async function checkApiHealth(): Promise<boolean> {
  await new Promise<void>((resolve) => {
    window.setTimeout(resolve, SIMULATED_API_DELAY_MS);
  });

  return true;
}
