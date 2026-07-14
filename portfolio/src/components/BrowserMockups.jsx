function BrowserChrome({ url }) {
  return (
    <div className="flex items-center gap-2 px-3.5 py-3 bg-ink-soft border-b border-line-on-ink">
      <span className="w-[9px] h-[9px] rounded-full bg-[#E0665A]" />
      <span className="w-[9px] h-[9px] rounded-full bg-[#E0B85A]" />
      <span className="w-[9px] h-[9px] rounded-full bg-[#5AC29A]" />
      <span className="font-mono text-[0.68rem] text-slate-light bg-white/5 px-3 py-1 rounded-md ml-2.5 flex-1 truncate">
        {url}
      </span>
    </div>
  );
}

function DashboardMock() {
  return (
    <div className="flex min-h-[300px]">
      <div className="w-[100px] bg-ink p-4 flex flex-col gap-3.5 shrink-0">
        <div className="w-5 h-5 rounded-[5px] bg-brass mb-2" />
        <div className="h-2 rounded w-[70%] bg-white/10" />
        <div className="h-2 rounded w-1/2 bg-brass" />
        <div className="h-2 rounded w-[60%] bg-white/10" />
        <div className="h-2 rounded w-2/5 bg-white/10" />
      </div>
      <div className="flex-1 p-5 flex flex-col gap-4">
        <div className="flex gap-2.5">
          {['up', 'up', 'down'].map((dir, i) => (
            <div key={i} className="flex-1 bg-paper rounded-lg p-3 flex flex-col gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${dir === 'up' ? 'bg-moss' : 'bg-rust'}`} />
              <div className={`h-3.5 rounded bg-line ${i === 1 ? 'w-3/5' : 'w-4/5'}`} />
            </div>
          ))}
        </div>
        <div className="bg-paper rounded-lg p-3.5 h-[90px]">
          <svg viewBox="0 0 300 90" preserveAspectRatio="none" className="w-full h-full">
            <polyline
              points="0,70 30,55 60,60 90,35 120,45 150,20 180,30 210,15 240,25 270,10 300,18"
              fill="none"
              stroke="#C9A15A"
              strokeWidth="2.5"
            />
          </svg>
        </div>
        <div className="bg-paper rounded-lg px-3.5 py-2.5 flex flex-col gap-2">
          <div className="h-2 rounded w-2/5 bg-slate-light opacity-60" />
          <div className="h-2.5 rounded bg-line" />
          <div className="h-2.5 rounded bg-line" />
          <div className="h-2.5 rounded bg-line" />
        </div>
      </div>
    </div>
  );
}

function CommerceMock() {
  return (
    <div className="flex min-h-[300px] p-5 gap-4">
      <div className="flex-[1.3] flex flex-col gap-3.5">
        <div
          className="rounded-lg h-[150px]"
          style={{ background: 'linear-gradient(135deg, rgba(201,161,90,0.18), #DDD8CC)' }}
        />
        <div className="bg-paper rounded-lg p-3.5 flex flex-col gap-2.5">
          <div className="h-2.5 rounded bg-line w-3/5" />
          <div className="h-2.5 rounded bg-rust/75 w-[30%]" />
          <div className="flex gap-2 my-1">
            <span className="w-4 h-4 rounded-full bg-ink" />
            <span className="w-4 h-4 rounded-full bg-rust" />
            <span className="w-4 h-4 rounded-full bg-moss" />
          </div>
          <div className="bg-ink text-paper font-mono text-[0.7rem] text-center py-2.5 rounded-md">Add to bag</div>
        </div>
      </div>
      <div className="flex-1 bg-paper rounded-lg p-4 flex flex-col gap-3">
        <div className="h-2.5 rounded bg-line w-2/5" />
        <div className="h-[34px] rounded-md bg-paper-dim border border-line" />
        <div className="h-[34px] rounded-md bg-paper-dim border border-line" />
        <div className="h-2.5 rounded bg-rust/75 w-1/4" />
      </div>
    </div>
  );
}

function AdminMock() {
  const rows = [
    { tag: 'ok', selected: false },
    { tag: 'warn', selected: false },
    { tag: 'ok', selected: true },
    { tag: 'ok', selected: false },
  ];
  return (
    <div className="min-h-[300px] p-[18px] flex flex-col gap-3.5">
      <div className="flex items-center justify-between">
        <div className="h-2.5 rounded bg-line w-1/5" />
        <div className="bg-ink text-paper font-mono text-[0.7rem] px-3 py-1.5 rounded-md">+ New</div>
      </div>
      <div className="bg-paper rounded-lg overflow-hidden border border-line">
        <div className="grid grid-cols-4 gap-2.5 px-3.5 py-3 bg-paper-dim">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="h-2 rounded bg-slate-light opacity-50" />
          ))}
        </div>
        {rows.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-4 gap-2.5 px-3.5 py-3 items-center border-t border-line ${
              row.selected ? 'bg-brass-soft' : ''
            }`}
          >
            <span className="h-2 rounded bg-line" />
            <span className={`h-3.5 w-[50px] rounded-full ${row.tag === 'ok' ? 'bg-moss/35' : 'bg-rust/35'}`} />
            <span className="h-2 rounded bg-line" />
            <span className="h-2 rounded bg-line" />
          </div>
        ))}
      </div>
    </div>
  );
}

const MOCKUPS = {
  dashboard: DashboardMock,
  commerce: CommerceMock,
  admin: AdminMock,
};

export default function BrowserWindow({ url, mockup }) {
  const MockComponent = MOCKUPS[mockup];
  return (
    <div className="rounded-xl overflow-hidden bg-ink shadow-[0_30px_60px_-20px_rgba(20,23,31,0.35),0_2px_8px_rgba(20,23,31,0.08)]">
      <BrowserChrome url={url} />
      <div className="bg-paper-dim">
        <MockComponent />
      </div>
    </div>
  );
}