//import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

let theData = {
  profile : {
    name : 'Mohamad Arizal Hadisucipto',
    desc : 'Lorem ipsum dolor sit amet, Kalian kira ini random ?. Sayang sekali ini nggak random. Pengennya sih random tapi pengen biar ada feeling gitu. Gak ngetik kode doang. Ngetik manual gini juga perlu. :3.',
    star : 3,
    photoProfile : 'https://www.gravatar.com/avatar/Arizal?d=identicon',
    bannerImage : 'https://picsum.photos/2000/400',
    stats : {
      post : '17',
      follow : '3',
      followers : '30k'
    },
    hadiah : 17.5,
    valid : 5,
    post : [
      {
        title : 'Gambar Gambar Yang Indah Menurut Arizal',
        waktu : '10 menit lalu',
        jenis : 'Opini',
        image : 'https://picsum.photos/600/400',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat odio id luctus feugiat. Suspendisse vel augue tortor. Donec placerat eros erat, eu dictum ipsum bibendum sit amet. Praesent ac tempor nulla. Mauris semper tempus auctor. In suscipit sagittis magna, in faucibus augue vulputate dignissim. Morbi vehicula semper leo at hendrerit. Nulla risus felis, efficitur et cursus eu, placerat sit amet risus. Donec aliquet commodo massa, nec ultrices tortor tristique ut. Mauris mauris elit, viverra non sollicitudin non, blandit eget dolor. Vestibulum ac erat at ipsum pellentesque commodo vel gravida neque. Curabitur pretium, lorem non facilisis maximus, odio dolor tristique nulla, eu accumsan velit odio at sem. Sed in augue ornare tellus blandit viverra. Pellentesque massa massa, molestie eget nulla ultrices, malesuada molestie dolor. Praesent placerat elit eu orci placerat, lacinia varius nunc volutpat. ',
        stats : {
          like : 32,
          fun : 50,
          comment : 3,
          view : 98,
          share : 74
        }
      },
      {
        title : 'Gambar Gambar Blur Yang Indah Menurut Arizal',
        waktu : '10 tahun lalu',
        jenis : 'Opini',
        image : 'https://picsum.photos/600/400?blur',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat odio id luctus feugiat. Suspendisse vel augue tortor. Donec placerat eros erat, eu dictum ipsum bibendum sit amet. Praesent ac tempor nulla. Mauris semper tempus auctor. In suscipit sagittis magna, in faucibus augue vulputate dignissim. Morbi vehicula semper leo at hendrerit. Nulla risus felis, efficitur et cursus eu, placerat sit amet risus. Donec aliquet commodo massa, nec ultrices tortor tristique ut. Mauris mauris elit, viverra non sollicitudin non, blandit eget dolor. Vestibulum ac erat at ipsum pellentesque commodo vel gravida neque. Curabitur pretium, lorem non facilisis maximus, odio dolor tristique nulla, eu accumsan velit odio at sem. Sed in augue ornare tellus blandit viverra. Pellentesque massa massa, molestie eget nulla ultrices, malesuada molestie dolor. Praesent placerat elit eu orci placerat, lacinia varius nunc volutpat. ',
        stats : {
          like : 12,
          fun : 45,
          comment : 16,
          view : 57,
          share : 44
        }
      },
      {
        title : 'Gambar Gambar Yang Indah Menurut Arizal',
        waktu : '10 menit lalu',
        jenis : 'Opini',
        image : 'https://picsum.photos/600/400',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat odio id luctus feugiat. Suspendisse vel augue tortor. Donec placerat eros erat, eu dictum ipsum bibendum sit amet. Praesent ac tempor nulla. Mauris semper tempus auctor. In suscipit sagittis magna, in faucibus augue vulputate dignissim. Morbi vehicula semper leo at hendrerit. Nulla risus felis, efficitur et cursus eu, placerat sit amet risus. Donec aliquet commodo massa, nec ultrices tortor tristique ut. Mauris mauris elit, viverra non sollicitudin non, blandit eget dolor. Vestibulum ac erat at ipsum pellentesque commodo vel gravida neque. Curabitur pretium, lorem non facilisis maximus, odio dolor tristique nulla, eu accumsan velit odio at sem. Sed in augue ornare tellus blandit viverra. Pellentesque massa massa, molestie eget nulla ultrices, malesuada molestie dolor. Praesent placerat elit eu orci placerat, lacinia varius nunc volutpat. ',
        stats : {
          like : 32,
          fun : 50,
          comment : 3,
          view : 98,
          share : 74
        }
      },
      {
        title : 'Gambar Gambar Blur Yang Indah Menurut Arizal',
        waktu : '10 tahun lalu',
        jenis : 'Opini',
        image : 'https://picsum.photos/600/400?blur',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat odio id luctus feugiat. Suspendisse vel augue tortor. Donec placerat eros erat, eu dictum ipsum bibendum sit amet. Praesent ac tempor nulla. Mauris semper tempus auctor. In suscipit sagittis magna, in faucibus augue vulputate dignissim. Morbi vehicula semper leo at hendrerit. Nulla risus felis, efficitur et cursus eu, placerat sit amet risus. Donec aliquet commodo massa, nec ultrices tortor tristique ut. Mauris mauris elit, viverra non sollicitudin non, blandit eget dolor. Vestibulum ac erat at ipsum pellentesque commodo vel gravida neque. Curabitur pretium, lorem non facilisis maximus, odio dolor tristique nulla, eu accumsan velit odio at sem. Sed in augue ornare tellus blandit viverra. Pellentesque massa massa, molestie eget nulla ultrices, malesuada molestie dolor. Praesent placerat elit eu orci placerat, lacinia varius nunc volutpat. ',
        stats : {
          like : 12,
          fun : 45,
          comment : 16,
          view : 57,
          share : 44
        }
      }
    ]
  }
}

class ProfileHeader extends Component {
  state = {
    data : theData.profile
  }
  render() {
    function Star(filled) {
      return (
        <svg className={'h-8 w-8 stroke-yellow-400 stroke-1 self-center ' + (filled.val ? 'fill-yellow-400' : '')} fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    }
    return <div className='w-full flex flex-col items-center shadow-m xl:w-9/12'>
      <div className='relative w-full'>
        <div className='w-full h-[250px]' style={{backgroundImage: 'url('+this.state.data.bannerImage+')', backgroundSize: 'cover'}}></div>
        {/* Avatar  <img src='https://picsum.photos/2000/400' alt='' className='w-auto h-auto'></img>*/}
        <img src={this.state.data.photoProfile} alt='' className='absolute -bottom-[4.5rem] h-36 w-36 rounded-full border-8 left-1/2 transform -translate-x-1/2 md:transform-none md:left-0 md:ml-4 border-white'></img>
        <div className="absolute top-0 left-0 m-2 flex justify-end items-center gap-x-5 bg-white/50 px-5 py-2 rounded font-medium text-xs md:inset-auto md:bottom-0 md:ml-44 md:m-0 md:mb-2 md:text-base">
          <div className="flex flex-col">
            <div className='text-black/50'>Postingan</div>
            <div className='self-center'>{this.state.data.stats.post}</div>
          </div>
          <div className="flex flex-col">
            <div className='text-black/50'>Mengikuti</div>
            <div className='self-center'>{this.state.data.stats.follow}</div>
          </div>
          <div className="flex flex-col">
            <div className='text-black/50'>Pengikut</div>
            <div className='self-center'>{this.state.data.stats.followers}</div>
          </div>
        </div>
        {/* Banner Button */}
        <div className="absolute bottom-0 right-0 mr-2 mb-2 flex flex-col justify-end items-center gap-3 md:flex-row">
          <div className='p-2 bg-black/25 rounded-full relative'>
            <svg className="h-6 w-6 fill-white/50" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          </div>
          <div className='p-2 bg-black/25 rounded-full relative'>
            <svg className="h-6 w-6 fill-white/50" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      {/* Profile Name, Star, And Edit Button */}
      <div className='flex p-1 pt-20 flex-col items-center w-4/5 text-center md:flex-row md:text-left md:pt-0 md:pl-44 md:w-full'>
        <div className='flex flex-col'>
          <div className='flex flex-col lg:flex-row md:pt-1'>
            <span className='font-bold text-xl md:shrink md:w-auto'>{this.state.data.name}</span>
            <div className='flex flex-row justify-center md:justify-start relative z-3'>
            {[...Array(5)].map((e, i) => <Star key={i} val={false} />)}
              <div className='absolute flex flex-row justify-center z-1'>
              {[...Array(this.state.data.star)].map((e, i) => <Star key={i} val={true} />)}
              </div>
            </div>
          </div>
          <div className='text-black/50 line-clamp-2 text-sm md:w-4/5'>
            {this.state.data.desc}
          </div>
        </div>
        <div className='self-center flex-1 flex justify-end'>
          <button className='bg-[#05B1A1] py-2 px-8 text-white mr-6 rounded text-sm md:text-base whitespace-nowrap'>Edit Profil</button>
        </div>
      </div>
    </div>
  }
}

class Profile extends Component {
  state = {
    profileButton: true
  }
  toggleProfile = () => {
    this.setState({profileButton : !this.state.profileButton})
  }
  render() {
    return <div className='flex-1 flex justify-end items-center gap-x-3 relative'>
      <div className={'self-center flex justify-end items-center flex-col absolute right-0 top-[4.25rem] gap-3 bg-white rounded-full md:flex md:top-0 md:right-[4.25rem] md:flex-row md:static ' + (this.state.profileButton ? '' : 'hidden')}>
        <div className='p-2 bg-gray-100 rounded-full cursor-pointer'>
          <svg className="h-6 w-6 fill-gray-700" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </div>
        <div className='p-2 bg-gray-100 rounded-full cursor-pointer'>
          <svg className="h-6 w-6 fill-gray-700" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
        </div>
        <div className='p-2 bg-gray-100 rounded-full cursor-pointer'>
          <svg className="h-6 w-6 fill-gray-700" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
          </svg>
        </div>
        <div className='p-2 bg-gray-100 rounded-full relative cursor-pointer'>
          <svg className="h-6 w-6 fill-gray-700" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
          <div className='absolute p-1 bg-red-500 rounded-full right-1.5 top-1.5'></div>
        </div>
      </div>
      <img src='https://www.gravatar.com/avatar/Arizal?d=identicon' alt='' className='h-10 w-10 rounded-full border-4 border-[#05678E] cursor-pointer' onClick={this.toggleProfile}></img>
    </div>
  }
}

class Create extends Component {
  state = {
    createButton: false
  }
  toggleCreate = () => {
    this.setState({createButton : !this.state.createButton})
  }
  render() {
    return <div className='fixed float-left bottom-5 z-10 flex flex-col-reverse gap-2' onClick={this.toggleCreate}>
      <div className='bg-[#05B1A1] rounded-full p-2 flex flex-row gap-2 cursor-pointer'>
        <svg className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
        <div className='text-white relative'>
          Buat Postingan
        </div>
      </div>
      <div className={'flex flex-col-reverse gap-2 w-auto z-10 ' + (this.state.createButton ? '' : 'hidden')}>
        <div className='cursor-pointer p-1 flex items-center gap-x-2 rounded-full w-full bg-white text-black hover:bg-[#05B1A1] hover:text-white transition'>
          <div className='p-0.5 rounded-full border-2 bg-[#05B1A1]'>
            <svg className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>Idea</div>
        </div>
        <div className='cursor-pointer p-1 flex items-center gap-x-2 rounded-full w-full bg-white text-black hover:bg-[#05B1A1] hover:text-white transition'>
          <div className='p-0.5 rounded-full border-2 bg-[#05B1A1]'>
            <svg className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </div>
          <div>Artikel</div>
        </div>
        <div className='cursor-pointer p-1 flex items-center gap-x-2 rounded-full w-full bg-white text-black hover:bg-[#05B1A1] hover:text-white transition'>
          <div className='p-0.5 rounded-full border-2 bg-[#05B1A1]'>
            <svg className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>Polling</div>
        </div>
        <div className='cursor-pointer p-1 flex items-center gap-x-2 rounded-full w-full bg-white text-black hover:bg-[#05B1A1] hover:text-white transition'>
          <div className='p-0.5 rounded-full border-2 bg-[#05B1A1]'>
            <svg className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          </div>
          <div>Petiisi</div>
        </div>
        <div className='cursor-pointer p-1 flex items-center gap-x-2 rounded-full w-full bg-white text-black hover:bg-[#05B1A1] hover:text-white transition'>
          <div className='p-0.5 rounded-full border-2 bg-[#05B1A1]'>
            <svg className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
          <div>Cerpen</div>
        </div>
      </div>
    </div>
  }
}

class Sidebar extends Component {
  state = {
    sideStatus: 0
  }
  setSideStatus = (data) => {
    this.setState({sideStatus : data})
  }
  render() {
    return <div className='shadow-m px-2 pt-2 flex flex-col gap-x-2 overflow-x-hidden overflow-y-auto h-64 customScroll rounded overflow-hidden'>
      <div className={'cursor-pointer p-2 flex items-center gap-x-2 rounded w-full hover:bg-[#05B1A130] transition ' + ( this.state.sideStatus === 0 ? 'bg-[#05b1a024] m-0.5' : '')} onClick={() => this.setSideStatus(0)}>
        <div className={'p-0.5 rounded ' + (this.state.sideStatus === 0 ? 'bg-[#05B1A1]' : 'border-2 border-slate-400')}>
          <svg className={"h-6 w-6 " + (this.state.sideStatus === 0 ? 'stroke-white' : 'stroke-slate-400')} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <div className={(this.state.sideStatus === 0 ? 'text-[#05B1A1] font-semibold' : 'text-slate-400')}>Semua</div>
      </div>
      <div className={'cursor-pointer p-2 flex items-center gap-x-2 rounded w-full hover:bg-[#05B1A130] transition ' + ( this.state.sideStatus === 1 ? 'bg-[#05b1a024] m-0.5' : '')} onClick={() => this.setSideStatus(1)}>
        <div className={'p-0.5 rounded ' + (this.state.sideStatus === 1 ? 'bg-[#05B1A1]' : 'border-2 border-slate-400')}>
          <svg className={"h-6 w-6 " + (this.state.sideStatus === 1 ? 'stroke-white' : 'stroke-slate-400')} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <div className={(this.state.sideStatus === 1 ? 'text-[#05B1A1] font-semibold' : 'text-slate-400')}>Idea</div>
      </div>
      <div className={'cursor-pointer p-2 flex items-center gap-x-2 rounded w-full hover:bg-[#05B1A130] transition ' + ( this.state.sideStatus === 2 ? 'bg-[#05b1a024] m-0.5' : '')} onClick={() => this.setSideStatus(2)}>
        <div className={'p-0.5 rounded ' + (this.state.sideStatus === 2 ? 'bg-[#05B1A1]' : 'border-2 border-slate-400')}>
          <svg className={"h-6 w-6 " + (this.state.sideStatus === 2 ? 'stroke-white' : 'stroke-slate-400')} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
        <div className={(this.state.sideStatus === 2 ? 'text-[#05B1A1] font-semibold' : 'text-slate-400')}>Artikel</div>
      </div>
      <div className={'cursor-pointer p-2 flex items-center gap-x-2 rounded w-full hover:bg-[#05B1A130] transition ' + ( this.state.sideStatus === 3 ? 'bg-[#05b1a024] m-0.5' : '')} onClick={() => this.setSideStatus(3)}>
        <div className={'p-0.5 rounded ' + (this.state.sideStatus === 3 ? 'bg-[#05B1A1]' : 'border-2 border-slate-400')}>
          <svg className={"h-6 w-6 " + (this.state.sideStatus === 3 ? 'stroke-white' : 'stroke-slate-400')} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <div className={(this.state.sideStatus === 3 ? 'text-[#05B1A1] font-semibold' : 'text-slate-400')}>Polling</div>
      </div>
      <div className={'cursor-pointer p-2 flex items-center gap-x-2 rounded w-full hover:bg-[#05B1A130] transition ' + ( this.state.sideStatus === 4 ? 'bg-[#05b1a024] m-0.5' : '')} onClick={() => this.setSideStatus(4)}>
        <div className={'p-0.5 rounded ' + (this.state.sideStatus === 4 ? 'bg-[#05B1A1]' : 'border-2 border-slate-400')}>
          <svg className={"h-6 w-6 " + (this.state.sideStatus === 4 ? 'stroke-white' : 'stroke-slate-400')} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
        </div>
        <div className={(this.state.sideStatus === 4 ? 'text-[#05B1A1] font-semibold' : 'text-slate-400')}>Petiisi</div>
      </div>
      <div className={'cursor-pointer p-2 flex items-center gap-x-2 rounded w-full hover:bg-[#05B1A130] transition ' + ( this.state.sideStatus === 5 ? 'bg-[#05b1a024] m-0.5' : '')} onClick={() => this.setSideStatus(5)}>
        <div className={'p-0.5 rounded ' + (this.state.sideStatus === 5 ? 'bg-[#05B1A1]' : 'border-2 border-slate-400')}>
          <svg className={"h-6 w-6 " + (this.state.sideStatus === 5 ? 'stroke-white' : 'stroke-slate-400')} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        </div>
        <div className={(this.state.sideStatus === 5 ? 'text-[#05B1A1] font-semibold' : 'text-slate-400')}>Cerpen</div>
      </div>
    </div>
  }
}

class Post extends Component {
  state = {
    data: theData.profile.post
  }
  render() {
    return [...Array(this.state.data.length)].map((e, i) => <div className='shadow-m w-full flex flex-col' key={i}>
    <div className='p-4 flex flex-row items-center'>
      <img src='https://www.gravatar.com/avatar/Arizal?d=identicon' alt='' className='cursor-pointer h-10 w-10 rounded-full border-2 border-slate-300'></img>
      <div className='flex flex-col text-sm ml-4'>
        <div className='cursor-pointer font-semibold'>Mohamad Arizal Hadisucipto</div>
        <div className='flex flex-row'>
          <span className='text-gray-500'>{this.state.data[i].waktu}</span>
          <span className='text-blue-500 ml-2 font-bold'>{this.state.data[i].jenis}</span>
        </div>
      </div>
      <div className='grow flex justify-end'>
        <svg className="cursor-pointer h-8 w-8 fill-gray-500" viewBox="0 0 20 20" fill="currentColor">
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      </div>
    </div>
    <div className='px-4 font-bold text-gray-900'>
      {this.state.data[i].title}
    </div>
    <div className='relative py-2'>
      <div className='w-full h-[300px]' style={{backgroundImage: 'url('+this.state.data[i].image+')', backgroundSize: 'cover'}}></div>
      <svg className="cursor-pointer h-10 w-10 absolute top-5 right-5 border-2 border-[#05B1A1] bg-white rounded-full p-1" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
      </svg>
    </div>
    <div className='px-4 text-gray-700 text-sm'>
      <span className='line-clamp-4 inline'>
        {this.state.data[i].desc} 
      </span><span className='text-blue-500 font-bold inline cursor-pointer'>Selengkapnya...</span>
    </div>
    <div className='flex flex-row gap-x-6 px-4 py-4 border-b-2 border-slate-200 overflow-x-auto'>
      <div className='flex flex-row items-center'>
        <svg className="cursor-pointer h-8 w-8 stroke-slate-400 hover:stroke-[#05B1A1] transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        <div className='text-sm text-slate-400'>{this.state.data[i].stats.like}</div>
      </div>
      <div className='flex flex-row items-center'>
        <svg className="cursor-pointer h-8 w-8 stroke-slate-400 hover:stroke-[#05B1A1] transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div className='text-sm text-slate-400'>{this.state.data[i].stats.fun}</div>
      </div>
      <div className='flex flex-row items-center'>
        <svg className="cursor-pointer h-8 w-8 stroke-slate-400 hover:stroke-[#05B1A1] transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <div className='text-sm text-slate-400'>{this.state.data[i].stats.comment}</div>
      </div>
      <div className='flex flex-row items-center'>
        <svg className="cursor-pointer h-8 w-8 stroke-slate-400 hover:stroke-[#05B1A1] transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        <div className='text-sm text-slate-400'>{this.state.data[i].stats.view}</div>
      </div>
      <div className='flex flex-row items-center'>
        <svg className="cursor-pointer h-8 w-8 stroke-slate-400 hover:stroke-[#05B1A1] transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <div className='text-sm text-slate-400'>{this.state.data[i].stats.share}</div>
      </div>
      <div className='grow flex justify-end'>
        <svg className="cursor-pointer h-8 w-8 stroke-slate-400 hover:stroke-[#05B1A1] transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </div>
    </div>
    <div className='p-4'>
      <div className='border-2 border-slate-200 rounded-full w-full p-1 flex flex-row items-center'>
        <img src='https://www.gravatar.com/avatar/Arizal?d=identicon' alt='' className='h-8 w-8 rounded-full'></img>
        <div className='flex-1 grid self-center'>
          <input className="placeholder:text-slate-400 block rounded-md py-2 px-2 justify-self-center focus:outline-none sm:text-sm w-full" placeholder="Tulis Komentar..." type="text" name="comment"/>
        </div>
        <div className='flex justify-end'>
          <svg className="cursor-pointer h-8 w-8 stroke-white bg-[#05B1A1] rounded-full p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
      </div>
    </div>
  </div>)
  }
}

class Hadiah extends Component {
  state = {
    data : theData.profile.hadiah
  }
  render() {
    return <div className='shadow-m p-4 flex flex-row items-center'>
      <svg className="h-10 w-10 fill-gray-600" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
        <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
      </svg>
      <div className='flex flex-col text-sm ml-4'>
        <div className='text-blue-500 font-semibold'>Total Poin Anda</div>
        <div className='flex flex-row'>
          <span className='text-orange-500 font-semibold'>{this.state.data}</span>
          <span className='text-slate-400 ml-2'>Klaim Hadiah</span>
        </div>
      </div>
      <div className='grow flex justify-end'>
        <svg className="h-8 w-8 fill-gray-600 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  }
}

class Valid extends Component {
  state = {
    data : theData.profile.valid,
    widthnya : theData.profile.valid / 8 * 100
  }
  render() {
    return <div className='shadow-m py-2 px-4 text-sm flex flex-col items-center text-center gap-y-2'>
      <div>Melengkapi profil membantu kami memvalidasi akun Anda, dan memudahkan Opinian lainnya memahami Anda</div>
      <div className='text-slate-600'>Lengkapi Profil Anda {this.state.data} / 8</div>
      <div className='border-2 border-[#05B1A1] w-10/12'>
        <div className='bg-orange-500 p-1' style={{width: this.state.widthnya+'%'}}></div>
      </div>
    </div>
  }
}

function App() {
  return (
    <div className='font-sans pb-2 mx-2 mb-10'>
      {/* -- Navbar */}
      <div className='flex items-stretch shadow-md shadow-emerald-100 pb-1 sticky top-0 z-10 bg-white pt-2 h-14'>
        {/* Logo */}
        <div className='flex-1 h-10'>
          <img src='https://opinia.id/static/media/logo.fee65ca6.png' alt='' className='h-full w-auto'></img>
        </div>
        {/* Search */}
        <div className='flex-1 self-center relative hidden md:grid'>
          <input className="placeholder:text-slate-400 block bg-slate-100/50 rounded-md py-2 px-2 justify-self-center focus:outline-none sm:text-sm w-full" placeholder="Cari..." type="text" name="search"/>
          <svg className="h-6 w-6 absolute right-0 self-center stroke-slate-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        {/* -- Profile */}
        <Profile />
        {/* Profile -- */}
      </div>
      {/* Navbar -- */}

      {/* -- Content */}
      <div className='flex flex-col items-center p-2'>
        {/* -- Profile Header */}
        <ProfileHeader />
        {/* Profile Header -- */}
        <div className='w-full flex flex-col mt-2 gap-x-4 xl:flex-row xl:w-9/12'>
          <Create />
          <div className='flex flex-col gap-y-2 xl:w-2/5'>
            <Hadiah />
            <Valid />
            {/* -- Sidebar Filter */}
            <Sidebar />
            {/* Sidebar Filter -- */}
          </div>
          <div className='flex flex-col gap-y-4 w-full'>
            <Post />
          </div>
        </div>
      </div>
      {/* Content -- */}
    </div>
  )
}

export default App;
