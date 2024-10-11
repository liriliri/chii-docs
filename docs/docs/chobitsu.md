# Chobitsu API

### sendRawMessage(message: string)

Send message to chobitsu.

```javascript
chobitsu.sendRawMessage(JSON.stringify({
  id: 1,  
  method: 'DOMStorage.clear',
  params: {
    storageId: {
      isLocalStorage: true,
      securityOrigin: 'http://example.com'
    }
  }
}));
```

### setOnMessage(onMessage: (message: string) => void)

Set message handler.

```javascript
chobitsu.setOnMessage(message => {
  console.log(message);
});
```

### sendMessage(method: string, params: any): Promise\<any\>

Send message without setting id and get result.

```javascript
!(async () => {
  console.log(await chobitsu.sendMessage('Storage.clearDataForOrigin', {
    storageTypes: 'local_storage'
  }));
})();
```

### domain(name: string)

Get domain object.

```javascript
const domStorage = chobitsu.domain('DOMStorage');
domStorage.enable();
domStorage.on('domStorageItemUpdated', params => console.log(params));
```