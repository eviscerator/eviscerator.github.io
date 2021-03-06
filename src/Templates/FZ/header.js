import React from 'react'

export default () => (
  <>
    <h3 style={{ textAlign: 'center', fontFamily: 'Times New Roman', marginBottom: 30 }}>
      РОССИЙСКАЯ ФЕДЕРАЦИЯ
    </h3>
    <h3 style={{ textAlign: 'center', fontFamily: 'Times New Roman' }}>
      ФЕДЕРАЛЬНЫЙ КОНСТИТУЦИОННЫЙ ЗАКОН
    </h3>
    <p style={{ textAlign: 'center', fontFamily: 'Times New Roman', fontSize: 19 }}>
      [<span style={{ color: '#ccc' }}>название</span>]
    </p>
    <div style={{ margin: 20 }}>
      <pre style={{ fontFamily: 'Times New Roman', marginTop: 10, fontSize: 19 }}>
        Одобрен Государственной Думой                                                 [<span style={{ color: '#ccc' }}>дата</span>] года
      </pre>
      <pre style={{ fontFamily: 'Times New Roman', marginTop: 10, fontSize: 19 }}>
        Одобрен Советом Федерации                                                        [<span style={{ color: '#ccc' }}>дата</span>] года
      </pre>
    </div>
  </>
)
