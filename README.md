# Coderhouse React JS Course - Final Project

This first deliverable comprised the integration of 3 main components that will be part of a functional ecommerce system.

![580shots_so](https://user-images.githubusercontent.com/117543842/227437480-8ca7e1ca-149b-4bc8-ade2-94059fe83d97.png)


## Routing

The routes used were defined as follows. 

```jsx
<BrowserRouter>
      <div>
        <NavBar/>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:id' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
</BrowserRouter>
```
In the attached GIF you can see the resulting navigation.


![routing](https://user-images.githubusercontent.com/117543842/231364881-f89d0c59-a22a-49bf-b2cb-97fb760d29ed.gif)


## Technologies and tools:
- Vite ⚡
- React JS ⚛️
- Tailwind 🌀
