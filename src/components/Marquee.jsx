const ITEMS = [
  'DOMÓTICA',
  'AUTOMATIZACIÓN INDUSTRIAL',
  'ELECTRICIDAD INDUSTRIAL',
  'ELECTRICIDAD DE MOTOCICLETAS',
  'CÁMARAS IP',
]

export default function Marquee() {
  const row = (keyPrefix) => (
    <div className="flex shrink-0 items-center">
      {ITEMS.map((item, i) => (
        <div key={`${keyPrefix}-${i}`} className="flex items-center">
          <span className="px-8 font-display text-lg font-bold uppercase tracking-widest text-ink-950">
            {item}
          </span>
          <span className="text-ink-950/40">◆</span>
        </div>
      ))}
    </div>
  )

  return (
    <div className="relative overflow-hidden border-y-2 border-ink-950 bg-volt py-3">
      <div className="flex w-max animate-marquee">
        {row('a')}
        {row('b')}
      </div>
    </div>
  )
}
