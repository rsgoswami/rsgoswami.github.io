
export default function Chatbot() {
  return (
    <div dangerouslySetInnerHTML={{ __html : `
    <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
<script src="https://mediafiles.botpress.cloud/df70a6a6-f64e-4e3c-b200-8bfdba248df6/webchat/config.js" defer></script>
`}}>
      
    </div>
  )
}
