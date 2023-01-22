import { CurrentTime } from '@/components/CurrentTime';

export default function HomePage() {
  return (
    <main className="grid min-h-full place-items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-fluid-lg font-bold">
          <span>The current time</span>
          <br />
          <span className="whitespace-nowrap">in Goleniów</span>
        </h1>
        <CurrentTime />
      </div>
    </main>
  );
}
