import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const payload = await request.json()

  const webhookUrl = process.env.DIAGNOSIS_WEBHOOK_URL ?? process.env.NEXT_PUBLIC_DIAGNOSIS_WEBHOOK_URL

  if (!webhookUrl) {
    console.error("Diagnosis webhook URL is not configured. Payload:", payload)
    return NextResponse.json({ error: "Webhook não configurado" }, { status: 500 })
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Diagnosis webhook responded with error:", response.status, errorText)
      return NextResponse.json({ error: "Erro ao enviar para o webhook" }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Diagnosis webhook request failed:", error)
    return NextResponse.json({ error: "Erro ao enviar formulário" }, { status: 500 })
  }
}
