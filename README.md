# test-repositorius v0.0.33

## Modules
Module | Description
------ | -----------
[components-Button] | 

## Functions

Name | Description
------ | -----------
[funNmb(nmb)] | Function for some
[funNmb_2(nmb, nmb_2)] | Function for some


## components-Button


### components-Button~Button(props)

Presentational component

**Kind**: inner method of [`components-Button`]  
**Returns**: `string` - template literal: bootstrap .col + custom html button  

| Param | Type |
| --- | --- |
| props | `Object` | 
| props.role | `string` | 
| props.className | `string` | 
| props.fireEvent | `string` | 
| props.event | `string` | 
| props.nodeText | `string` | 

**Example**  
```js
${Button({
            role: 'appButtonIncrement',
            className: 'calc-btn btn btn-outline-success btn-lg btn-block',
            fireEvent: 'ondblclick',
            event: 'window.mapAllDispatch.incrementDecrement.increment()',
            nodeText: '+',
    })}
```

## funNmb(nmb)

Function for some

**Kind**: global function  

| Param | Type |
| --- | --- |
| nmb | `number` | 


## funNmb_2(nmb, nmb_2)

Function for some

**Kind**: global function  

| Param | Type |
| --- | --- |
| nmb | `number` | 
| nmb_2 | `number` | 

<!-- LINKS -->

[components-Button]:#components-button
[`components-Button`]:#components-button
[funNmb(nmb)]:#funnmbnmb
[funNmb_2(nmb, nmb_2)]:#funnmb_2nmb-nmb_2

