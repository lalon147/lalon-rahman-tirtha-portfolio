import { useEffect, useRef } from 'react'
import { skills } from '../data'

// One bubble per distinct icon, spread evenly over a sphere (Fibonacci lattice).
const items = []
const seen = new Set()
for (const { items: group } of skills) {
  for (const s of group) {
    if (s.icon && !seen.has(s.icon)) { seen.add(s.icon); items.push(s) }
  }
}
const points = items.map((_, i) => {
  const y = 1 - (2 * (i + 0.5)) / items.length
  const r = Math.sqrt(1 - y * y)
  const t = Math.PI * (3 - Math.sqrt(5)) * i
  return [Math.cos(t) * r, y, Math.sin(t) * r]
})

/**
 * Icon globe that auto-rotates and can be dragged. Positions are written straight to the DOM
 * each frame (no React re-render); it only animates while on screen and holds still for
 * prefers-reduced-motion.
 */
export function SkillSphere() {
  const box = useRef(null)
  const nodes = useRef([])

  useEffect(() => {
    const el = box.current
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let ax = -0.35, ay = 0.4          // current rotation (radians)
    let vx = 0, vy = 0.004            // angular velocity per frame
    let drag = null, frame = 0, visible = false

    const render = () => {
      const R = el.clientWidth / 2 - 28
      const [sx, cx, sy, cy] = [Math.sin(ax), Math.cos(ax), Math.sin(ay), Math.cos(ay)]
      points.forEach(([x, y, z], i) => {
        const x1 = x * cy + z * sy, z1 = -x * sy + z * cy   // rotate around Y
        const y2 = y * cx - z1 * sx, z2 = y * sx + z1 * cx  // then around X
        const depth = (z2 + 1) / 2                          // 0 = back, 1 = front
        const n = nodes.current[i]
        n.style.transform = `translate(-50%, -50%) translate3d(${x1 * R}px, ${y2 * R}px, 0) scale(${0.55 + depth * 0.6})`
        n.style.opacity = 0.25 + depth * 0.75
        n.style.zIndex = Math.round(depth * 100)
      })
    }

    const tick = () => {
      if (!drag) {
        ay += vy; ax += vx
        vy += (0.004 - vy) * 0.02    // ease back to the idle spin after a fling
        vx *= 0.95
      }
      render()
      frame = visible ? requestAnimationFrame(tick) : 0
    }

    const down = (e) => { drag = { x: e.clientX, y: e.clientY }; el.setPointerCapture(e.pointerId) }
    const move = (e) => {
      if (!drag) return
      vy = (e.clientX - drag.x) * 0.006
      vx = -(e.clientY - drag.y) * 0.006
      ay += vy; ax += vx
      drag = { x: e.clientX, y: e.clientY }
      if (reduce) render()
    }
    const up = () => { drag = null }

    el.addEventListener('pointerdown', down)
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerup', up)
    el.addEventListener('pointercancel', up)

    render()
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting && !reduce
      if (visible && !frame) frame = requestAnimationFrame(tick)
    })
    io.observe(el)
    const onResize = () => render()
    window.addEventListener('resize', onResize)

    return () => {
      io.disconnect()
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
      el.removeEventListener('pointerdown', down)
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerup', up)
      el.removeEventListener('pointercancel', up)
    }
  }, [])

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute inset-[12%] rounded-full bg-gradient-to-br from-accent/20 to-accent-2/20 blur-3xl" />
      <div
        ref={box}
        role="img"
        aria-label={`Skills: ${items.map((s) => s.name).join(', ')}`}
        className="relative aspect-square w-full cursor-grab touch-pan-y select-none active:cursor-grabbing"
      >
        {items.map(({ name, icon: Icon }, i) => (
          <span
            key={name}
            ref={(n) => { nodes.current[i] = n }}
            title={name}
            aria-hidden
            className="absolute left-1/2 top-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface/90 text-2xl text-accent shadow-lg shadow-black/40 will-change-transform"
          >
            <Icon />
          </span>
        ))}
      </div>
      <p className="mt-2 text-center font-mono text-xs text-muted">drag to spin</p>
    </div>
  )
}
